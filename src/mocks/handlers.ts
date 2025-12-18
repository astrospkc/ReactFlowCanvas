import { initialNodes } from '@/canvas/nodes';
import { http, HttpResponse } from 'msw';

const TotalApps = [
    { id: '1', name: 'supertokens-golang' },
    { id: '2', name: 'supertokens-java' },
    { id: '3', name: 'supertokens-python' },
    { id: '4', name: 'supertokens-js' },
]

const Graphs = {
    nodes: [
        {
            id: 'service',
            type: 'service',
            data: { label: 'API Service', cpu: 40 },
            position: { x: 200, y: 150 },
        },
        {
            id: 'postgres',
            type: 'db',
            data: { label: 'Postgres' },
            position: { x: 450, y: 80 },
        },
    ],
    edges: [
        { id: 'e1', source: 'service', target: 'postgres' },
    ],
}


export const handlers = [
    http.get('/api/user', () => {
        return HttpResponse.json({
            code: 0,
            data: { name: 'Mock User', role: 'admin' },
        });
    }),
    http.get('/apps', () => {
        return HttpResponse.json({
            data: TotalApps
        })
    }),

    http.get('/apps/:appId/graph', () => {
        return HttpResponse.json({

        })
    })


];