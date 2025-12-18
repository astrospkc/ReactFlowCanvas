

import { http, HttpResponse } from 'msw';

const TotalApps = [
    { id: '1', name: 'supertokens-golang' },
    { id: '2', name: 'supertokens-java' },
    { id: '3', name: 'supertokens-python' },
    { id: '4', name: 'supertokens-js' },
]


const Graphs = {
    id: "1",
    nodes: [
        {
            id: "github",
            type: 'app',
            data: {
                icon: "<FaGithub />",
                service: "Github",
                rate: "$0.03/HR",
                metrics: {
                    cpu: 0.02,
                    memory: "0.05 GB",
                    disk: "10.00 GB",
                    region: 1,
                },
                activeMetric: "CPU", // CPU | Memory | Disk | Region
                slider: {
                    min: 0,
                    max: 100,
                    value: 2,
                    unit: "vCPU",
                },
                status: {
                    label: "Success",
                    type: "healthy",
                },

                provider: "aws",
            },
            position: { x: 0, y: 0 }

        },
        {
            id: 'postgres',
            type: 'app',
            data: {
                icon: "<SiPostgresql />",
                service: "PostgreSQL",
                rate: "$0.03/HR",
                metrics: {
                    cpu: 0.02,
                    memory: "0.05 GB",
                    disk: "10.00 GB",
                    region: 1,
                },
                activeMetric: "CPU", // CPU | Memory | Disk | Region
                slider: {
                    min: 0,
                    max: 100,
                    value: 2,
                    unit: "vCPU",
                },
                status: {
                    label: "Success",
                    type: "healthy",
                },

                provider: "aws",
            },
            position: { x: 0, y: 200 }

        },
    ],
    edges: [
        { id: 'xy-edge__github-postgres', source: 'github', target: 'postgres' },
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
            data: Graphs
        })
    }),
    http.post(`/apps`, async ({ request }) => {
        const body = await request.json()
        return HttpResponse.json({
            data: body
        })
    })


];