import { City } from '../city/types'

export interface ProfileInfo {
    email: string
    name: string
    picture: string
    provider: 'google.com' | 'apple.com'
    myCity: City
    favoriteCities: City[]
}

export interface RegisterMyCityParams {
    cityId: number
}
