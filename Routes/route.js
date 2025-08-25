export async function appRoutes(fastify) {
    fastify.get('/hello', async (request, reply) => {
        return { message: 'Hello, world!' };
    });
    fastify.get('/user/:id', async (request, reply) => {
        const { id } = request.params;
        return { userId: id };
    });
}
