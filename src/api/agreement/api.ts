import client from '../client'
import { AxiosInstance } from 'axios'
import { BaseRes } from '../model'
import { Agreements } from './types'

class AgreementApi {
    private readonly axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    getAgreement() {
        return this.axiosClient.request<BaseRes<Agreements>>({
            method: 'GET',
            url: '/agreement',
        })
    }

    updateAgreements(params: Agreements) {
        return this.axiosClient.request({
            method: 'POST',
            url: '/agreement',
            data: params,
        })
    }
}

export const agreementApi = new AgreementApi(client)
