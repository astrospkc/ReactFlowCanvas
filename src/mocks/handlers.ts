import { initialNodes } from '@/canvas/nodes';
import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/user', () => {
        return HttpResponse.json({
            code: 0,
            data: { name: 'Mock User', role: 'admin' },
        });
    }),

    http.get('/api/nodes', () => {
        return HttpResponse.json({
            code: 0,
            data: initialNodes,
        })
    }),
    http.post('/projects', async ({ request }) => {
        const newProject = await request.json() as Record<string, any>
        return HttpResponse.json(
            {
                ...newProject,
                id: Date.now(),
            },
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    })


];