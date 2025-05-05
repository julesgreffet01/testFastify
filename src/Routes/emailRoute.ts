import { FastifyInstance } from 'fastify';
import { sendMail } from '../utils/mailer.js';

export async function emailRoutes(fastify: FastifyInstance) {
    fastify.post('/send-email', async (request, reply) => {
        try {
            await sendMail('julesgreffet@gmail.com', 'Test Fastify', 'Ceci est un test depuis Fastify avec Nodemailer');
            return reply.send({ success: true, message: 'Email envoyé' });
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ success: false, message: 'Erreur lors de l\'envoi du mail' });
        }
    });
}
