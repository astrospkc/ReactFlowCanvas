import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useAppsQuery() {
    return useQuery({
        queryKey: ['apps'],
        queryFn: async () => {
            const response = await axios.get('/apps')
            const data = await response.data
            return data
        }
    })
}