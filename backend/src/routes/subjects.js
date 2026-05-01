import { createSubject, deleteSubject, getSubjects, updateSubject } from '../controllers/subjects.js';

export default async function subjectsRoutes(fastify) {
  fastify.get('/subjects', async (req, reply) => {
    const subjects = await getSubjects(fastify);
    reply.send(subjects);
  });

  fastify.post('/subjects', async (req, reply) => {
    const result = await createSubject(fastify, req.body);
    reply.status(201).send(result);
  });

  fastify.delete('/subjects', async (req, reply) => {
    const subjectId = req.body;
    const result = await deleteSubject(fastify, subjectId);
    reply.status(201).send(result);
  });

  fastify.put('/subjects', async (req, reply) => {
    const subject = req.body;
    const result = await updateSubject(fastify, subject);
    reply.status(201).send(result);
  });
}
