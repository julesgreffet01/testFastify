import Fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { appRoutes} from "./Routes/route.js";

const fastify: FastifyInstance = Fastify({
    requestTimeout: 5000,
    caseSensitive: true,
});


fastify.register(appRoutes);

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
