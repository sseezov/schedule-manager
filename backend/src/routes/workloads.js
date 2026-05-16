// routes/workloads.js
import { getWorkloads, createWorkload, updateWorkload, deleteWorkload } from '../controllers/workloads.js';

export default async function workloadsRoutes(fastify) {
  // Получить всю нагрузку (для левой панели)
  fastify.get('/workloads', async (req, reply) => {
    const workloads = await getWorkloads(fastify);
    reply.send(workloads);
  });

  // Создать нагрузку
  fastify.post('/workloads', async (req, reply) => {
    const result = await createWorkload(fastify, req.body);
    reply.status(201).send(result);
  });

  // Обновить нагрузку
  fastify.put('/workloads', async (req, reply) => {
    const result = await updateWorkload(fastify, req.body);
    reply.send(result);
  });

  // Удалить нагрузку
  fastify.delete('/workloads', async (req, reply) => {
    const workloadId = req.body;
    const result = await deleteWorkload(fastify, workloadId);
    reply.send(result);
  });
}
