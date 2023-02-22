import { useQuery } from '@tanstack/react-query'
import { myApi } from './api'

export function useGetProfile() {
    return useQuery({
        queryKey: ['@'],
        queryFn: () => myApi.getProfile(),
    })
}
