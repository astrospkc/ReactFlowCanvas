import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/user', () => {
        return HttpResponse.json({
            code: 0,
            data: { name: 'Mock User', role: 'admin' },
        });
    }),

];