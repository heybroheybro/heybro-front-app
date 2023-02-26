import AuthStorage from '@heybro/storages/auth/AuthStorage'
import axios from 'axios'
import * as AxiosLogger from 'axios-logger'
import Config from 'react-native-config'

const client = axios.create({
    baseURL: Config.SERVICE_BASE_URL,
})
client.interceptors.request.use(
    async (config) => {
        if (config.url?.includes('/auth') || config.url?.includes('/city')) return AxiosLogger.requestLogger(config)

        const { accessToken } = await AuthStorage.get()
        return AxiosLogger.requestLogger({
            ...config,
            headers: {
                ...config.headers,
                ['access_token']: accessToken,
            },
        })
    },
    (error) => Promise.reject(error),
)

client.interceptors.response.use(
    (res) => AxiosLogger.responseLogger(res),
    (error) => Promise.reject(error),
)

export default client
