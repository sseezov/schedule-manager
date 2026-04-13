import { bellsQueries, teachersQueries } from '../db/queries.js'

export const getBells = async (fastify) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(bellsQueries.getAll)
    return rows
  }
  finally {
    client.release()
  }
}

export const createTeacher = async (fastify, data) => {
  const client = await fastify.pg.connect()
  try {
    await client.query(teachersQueries.create, [
      data.fio,
      data.abbr,
      data.position,
    ])
    return { message: 'Преподаватель добавлен!' }
  }
  finally {
    client.release()
  }
}

export const updateTeacher = async (fastify, data) => {
  const client = await fastify.pg.connect()
  try {
    await client.query(teachersQueries.update, [
      data.fio,
      data.abbr,
      data.position,
      data.id,
    ])
    return { message: 'Данные успешно обновлены!' }
  }
  finally {
    client.release()
  }
}

export const deleteTeacher = async (fastify, teacherId) => {
  const client = await fastify.pg.connect()
  try {
    await client.query(teachersQueries.delete, [teacherId])
    return { message: 'Преподаватель удален!' }
  }
  finally {
    client.release()
  }
}
