export interface SearchCityParams {
    offset: number
    limit: number
    cityName: string
}

export interface City {
    id: number
    countryName: string
    countryCode: string
    cityGroupCode: string
    cityName: string
    cityCode: string
}
