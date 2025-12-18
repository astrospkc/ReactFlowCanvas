import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useGraphsQuery(appId: string) {
    return useQuery({
        queryKey: ['app-graph', appId],
        queryFn: async () => {
            const response = await axios.get(`/apps/${appId}/graph`)
            const data = await response.data
            return data
        }
    })
}