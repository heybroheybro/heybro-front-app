import axios from 'axios'
import axiosInherit from 'axios-inherit'
import * as AxiosLogger from 'axios-logger'

axiosInherit(axios)

axios.defaults.baseURL = 'http://backend.eba-mu9rwp2a.ap-northeast-2.elasticbeanstalk.com'
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
