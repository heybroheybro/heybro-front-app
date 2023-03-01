import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { RCT_QUERY_KEYS } from '../constants'
import { agreementApi } from './api'
import { Agreements } from './types'

export function useUpdateAgreements() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (params: Agreements) => agreementApi.updateAgreements(params),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [RCT_QUERY_KEYS.AGREEMENTS] })
        },
    })
}

export function useGetAgreement() {
    return useQuery({
        queryKey: [RCT_QUERY_KEYS.AGREEMENTS],
        queryFn: async () => await agreementApi.getAgreement(),
    })
}
