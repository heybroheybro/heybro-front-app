import client from '../client'
import { BaseRes, PaginationResponse } from '../model'
import { AxiosInstance } from 'axios'
import { City, SearchCityParams } from './types'

class CityApi {
    private axiosClient: AxiosInstance

    constructor(axiosClient: AxiosInstance) {
        this.axiosClient = axiosClient
    }

    async searchCity({ offset, limit, cityName }: SearchCityParams): Promise<PaginationResponse<City>> {
        const response = await this.axiosClient.request<BaseRes<City[]>>({
            method: 'GET',
            url: `/city/search?offset=${offset}&limit=${limit}&cityName=${cityName}`,
        })
        return {
            data: response.data.data || [],
            pageParam: offset + limit,
        }
    }
}

export const cityApi = new CityApi(client)
