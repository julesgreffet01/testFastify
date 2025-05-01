import Fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

const fastify: FastifyInstance = Fastify({
    requestTimeout: 5000,
    caseSensitive: true,
});

fastify.get('/', async function handler(request: FastifyRequest, reply: FastifyReply) {
    return { hello: 'world' };
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server is running on http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start()
