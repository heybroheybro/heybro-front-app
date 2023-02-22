import { useInfiniteQuery } from '@tanstack/react-query'
import { RCT_QUERY_KEYS } from '../constants'
import { cityApi } from './api'

export function useSearchCity(cityName: string, limit = 15) {
    const { data, hasNextPage, fetchNextPage, refetch } = useInfiniteQuery({
        queryKey: [RCT_QUERY_KEYS.SEARCH_CITY, cityName],
        queryFn: async ({ pageParam = 0 }) => {
            console.log('WHATT:', pageParam)
            return await cityApi.searchCity({ offset: pageParam, limit, cityName })
        },
        getNextPageParam: (lastPage) => {
            const currentPageSize = lastPage.data?.length || 0
            // console.log('PAGE-CHECK', currentPageSize, limit, offset, currentPageSize < limit)
            return currentPageSize < limit ? undefined : lastPage.pageParam
        },
    })
    const flattenedData = data?.pages.flatMap((data) => data.data)
    return { hasNextPage, data: flattenedData, fetchNextPage, refetch }
}
