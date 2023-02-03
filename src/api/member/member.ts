import { BaseRes, JwtTokenDto } from '../model'
import { AxiosInstance } from 'axios'
import client from '../client'
import AuthStorage from '@heybro/storages/auth/AuthStorage'

class MemberApi {
    private axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    getEmail({ accessToken }: { accessToken: string }) {
        return this.axiosClient.request<BaseRes<any>>({
            method: 'GET',
            url: `/auth/email`,
            headers: {
                accessToken,
            },
        })
    }

    async signIn({ authorization }: { authorization: string }) {
        const response = await this.axiosClient.request<JwtTokenDto>({
            method: 'POST',
            url: `/auth/signin`,
            headers: {
                Authorization: authorization,
            },
        })

        const jwtToken = response?.data
        const accessToken = jwtToken?.accessToken ?? ''
        const refreshToken = jwtToken?.refreshToken ?? ''
        await AuthStorage.set({ accessToken, refreshToken })
        return jwtToken
    }

    refreshToken({ refreshToken }: { refreshToken: string }) {
        return this.axiosClient.request<JwtTokenDto>({
            method: 'GET',
            url: `/auth/token`,
            headers: {
                'refresh-token': refreshToken,
            },
        })
    }
}

export const memberApi = new MemberApi(client)
