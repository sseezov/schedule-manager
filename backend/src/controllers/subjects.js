import { subjectsQueries } from '../db/queries.js';

export const getSubjects = async (fastify) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(subjectsQueries.getAll);
    return rows;
  }
  finally {
    client.release();
  }
};

export const createSubject = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(subjectsQueries.create, [
      data.name,
      data.abbreviation,
    ]);
    return { message: 'Предмет добавлен!' };
  }
  finally {
    client.release();
  }
};

export const updateSubject = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(subjectsQueries.update, [
      data.name,
      data.abbreviation,
      data.id,
    ]);
    return { message: 'Данные предмета обновлены!' };
  }
  finally {
    client.release();
  }
};

export const deleteSubject = async (fastify, subjectId) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(subjectsQueries.delete, [subjectId]);
    return { message: 'Предмет удален!' };
  }
  finally {
    client.release();
  }
};