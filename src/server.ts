import Fastify, { FastifyInstance } from 'fastify';
import { appRoutes} from "./Routes/route.js";
import {emailRoutes} from "./Routes/emailRoute.js";

const fastify: FastifyInstance = Fastify({
    logger: true
});


fastify.register(appRoutes);
fastify.register(emailRoutes);

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: "0.0.0.0" });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start()
