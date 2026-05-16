// controllers/workloads.js
import { workloadsQueries } from '../db/queries.js';

export const getWorkloads = async (fastify) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(workloadsQueries.getAll);
    return rows;
  }
  finally {
    client.release();
  }
};

export const createWorkload = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    const result = await client.query(workloadsQueries.create, [
      data.groupId,
      data.teacherId,
      data.subjectId,
      data.lessonsCount,
    ]);
    return { message: 'Нагрузка добавлена!', id: result.rows[0]?.id };
  }
  catch (error) {
    console.error('Error creating workload:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};

export const updateWorkload = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(workloadsQueries.update, [
      data.groupId,
      data.teacherId,
      data.subjectId,
      data.lessonsPerWeek,
      data.id,
    ]);
    return { message: 'Нагрузка обновлена!' };
  }
  catch (error) {
    console.error('Error updating workload:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};

export const deleteWorkload = async (fastify, workloadId) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(workloadsQueries.delete, [workloadId]);
    return { message: 'Нагрузка удалена!' };
  }
  catch (error) {
    console.error('Error deleting workload:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};
