import axios from 'axios'
import axiosInherit from 'axios-inherit'
import * as AxiosLogger from 'axios-logger'
import Config from 'react-native-config'

axiosInherit(axios)

axios.defaults.baseURL = Config.SERVICE_BASE_URL
axios.interceptors.request.use(AxiosLogger.requestLogger)
axios.interceptors.response.use(AxiosLogger.responseLogger)

export function initialAxiosAuthorizationInterceptor(accessToken: string) {
    axios.interceptors.request.use(
        (config) => {
            if (config.url?.includes('/auth')) return config
            return {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: accessToken,
                },
            }
        },
        (error) => Promise.reject(error),
    )
}

export default axios.create()
