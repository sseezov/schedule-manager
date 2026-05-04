import { classesQueries } from '../db/queries.js';

export const getClasses = async (fastify) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(classesQueries.getAll);
    return rows;
  }
  finally {
    client.release();
  }
};

export const createClass = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(classesQueries.create, [
      data.name,
      data.abbreviation,
      data.capacity,
      data.building,
    ]);
    return { message: 'Аудитория добавлена!' };
  }
  finally {
    client.release();
  }
};

export const updateClass = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    const result = await client.query(classesQueries.update, [
      data.name,
      data.abbreviation,
      data.capacity,
      data.building,
      data.id,
    ]);
    if (result.rowCount === 0) {
      return null;
    }
    return { message: 'Данные аудитории обновлены!' };
  }
  finally {
    client.release();
  }
};

export const deleteClass = async (fastify, classId) => {
  const client = await fastify.pg.connect();
  try {
    const result = await client.query(classesQueries.delete, [classId]);
    if (result.rowCount === 0) {
      return null;
    }
    return { message: 'Аудитория удалена!' };
  }
  finally {
    client.release();
  }
};
