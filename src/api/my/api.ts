import client from '../client'
import { BaseRes } from '../model'
import { AxiosInstance } from 'axios'
import { City } from '../city/types'
import { ProfileInfo, RegisterMyCityParams } from './types'

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

    registerMyCity({ cityId }: RegisterMyCityParams) {
        return this.axiosClient.request({
            method: 'POST',
            url: '/my/city',
            data: { cityId },
        })
    }

    getMyCity() {
        return this.axiosClient.request<BaseRes<City>>({
            method: 'GET',
            url: '/my/cities',
        })
    }
}

export const myApi = new MyApi(client)
