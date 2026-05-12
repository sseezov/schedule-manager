import { getBellsByScheduleId, updateBellsByScheduleId } from '../controllers/bells.js';

export default async function bellsRoutes(fastify) {
  fastify.get('/bells/:scheduleId', async (req, reply) => {
    const { scheduleId } = req.params;
    const bells = await getBellsByScheduleId(fastify, scheduleId);
    reply.send(bells);
  });

  fastify.put('/bells/:scheduleId', async (req, reply) => {
    const { scheduleId } = req.params;
    const result = await updateBellsByScheduleId(fastify, scheduleId, req.body);
    reply.send(result);
  });
}
