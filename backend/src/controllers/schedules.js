import { schedulesQueries } from '../db/queries.js';

export const getSchedules = async (fastify) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(schedulesQueries.getAll);
    return rows;
  }
  finally {
    client.release();
  }
};

export const createSchedule = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(schedulesQueries.create, [
      data.name,
      data.lessonsInDay,
      data.weekdays,
    ]);
    return { message: 'Расписание добавлено!' };
  }
  finally {
    client.release();
  }
};

export const updateSchedule = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(schedulesQueries.update, [
      data.name,
      data.lessonsInDay,
      data.weekdays,
      data.id,
    ]);
    return { message: 'Данные расписания обновлены!' };
  }
  finally {
    client.release();
  }
};

export const deleteSchedule = async (fastify, scheduleId) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(schedulesQueries.delete, [scheduleId]);
    return { message: 'Расписание удалено!' };
  }
  finally {
    client.release();
  }
};
