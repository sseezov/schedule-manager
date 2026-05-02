import { createSchedule, deleteSchedule, getSchedules, updateSchedule } from '../controllers/schedules.js';

export default async function schedulesRoutes(fastify) {
  fastify.get('/schedules', async (req, reply) => {
    const schedules = await getSchedules(fastify);
    reply.send(schedules);
  });

  fastify.post('/schedules', async (req, reply) => {
    const result = await createSchedule(fastify, req.body);
    reply.status(201).send(result);
  });

  fastify.delete('/schedules', async (req, reply) => {
    const scheduleId = req.body;
    const result = await deleteSchedule(fastify, scheduleId);
    reply.status(201).send(result);
  });

  fastify.put('/schedules', async (req, reply) => {
    const schedule = req.body;
    const result = await updateSchedule(fastify, schedule);
    reply.status(201).send(result);
  });
}
