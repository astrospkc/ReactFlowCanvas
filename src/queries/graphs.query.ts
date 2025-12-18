import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useAppGraphsQuery(appId: string) {
    // console.log("appid: ", appId    )
    return useQuery({
        queryKey: ['app-graph', appId],
        queryFn: async () => {
            if (!appId) return { nodes: [], edges: [] }
            const response = await axios.get(`/apps/${appId}/graph`)
            const data = await response.data
            return data
        }
    })
}