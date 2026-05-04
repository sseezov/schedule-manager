import { createClass, deleteClass, getClasses, updateClass } from '../controllers/classes.js';

export default async function classesRoutes(fastify) {
  fastify.get('/classes', async (req, reply) => {
    const classes = await getClasses(fastify);
    reply.send(classes);
  });

  fastify.post('/classes', async (req, reply) => {
    const classData = req.body;
    if (typeof classData?.name !== 'string' || !classData.name.trim()) {
      return reply.status(400).send({ message: 'Название аудитории обязательно' });
    }
    const result = await createClass(fastify, classData);
    reply.status(201).send(result);
  });

  fastify.delete('/classes', async (req, reply) => {
    const classId = req.body;
    const result = await deleteClass(fastify, classId);
    if (!result) {
      return reply.status(404).send({ message: 'Аудитория не найдена' });
    }
    reply.status(201).send(result);
  });

  fastify.put('/classes', async (req, reply) => {
    const classData = req.body;
    if (typeof classData?.name !== 'string' || !classData.name.trim()) {
      return reply.status(400).send({ message: 'Название аудитории обязательно' });
    }
    const result = await updateClass(fastify, classData);
    if (!result) {
      return reply.status(404).send({ message: 'Аудитория не найдена' });
    }
    reply.status(201).send(result);
  });
}
