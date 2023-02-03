import { BaseRes } from '@heybro/api/model'
import { AxiosInstance } from 'axios'
import client from '../client'

class FileApi {
    private axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    uploadFile(formData: FormData) {
        return this.axiosClient.request<BaseRes<any>>({
            method: 'POST',
            url: '/file',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    deleteFile({ uuid }: { uuid: string }) {
        return this.axiosClient.request<BaseRes<any>>({
            method: 'DELETE',
            url: `/file/${uuid}`,
        })
    }
}

export const fileApi = new FileApi(client)
