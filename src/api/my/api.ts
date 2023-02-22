import client from '../client'
import { BaseRes } from '../model'
import { AxiosInstance } from 'axios'
import { ProfileInfo } from './types'

class MyApi {
    private axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    getProfile() {
        return this.axiosClient.request<BaseRes<ProfileInfo>>({
            method: 'GET',
            url: '/my/profile',
        })
    }
}

export const myApi = new MyApi(client)
