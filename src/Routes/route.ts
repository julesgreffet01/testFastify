import { FastifyInstance } from 'fastify';

export async function appRoutes(fastify: FastifyInstance) {
    fastify.get('/hello', async (request, reply) => {
        return { message: 'Hello, world!' };
    });

    fastify.get('/user/:id', async (request, reply) => {
        const { id } = request.params as { id: string };
        return { userId: id };
    });
}
