import { getLessons } from '../controllers/lessons.js';

export default async function teachersRoutes(fastify) {
  fastify.get('/lessons', async (req, reply) => {
    const lessons = await getLessons(fastify);
    reply.send(lessons);
  });
}
