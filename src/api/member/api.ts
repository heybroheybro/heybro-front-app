import { BaseRes, JwtTokenDto } from '../model'
import { AxiosInstance } from 'axios'
import { SignInResponse } from './types'
import client from '../client'

class MemberApi {
    private axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    signIn({ idToken }: { idToken: string }) {
        return this.axiosClient.request<BaseRes<SignInResponse>>({
            method: 'POST',
            url: `/auth/login`,
            data: { idToken },
        })
    }

    refreshToken({ refreshToken }: { refreshToken: string }) {
        return this.axiosClient.request<BaseRes<JwtTokenDto>>({
            method: 'POST',
            url: `/auth/refreshToken`,
            data: { refreshToken },
        })
    }
}

export const memberApi = new MemberApi(client)
