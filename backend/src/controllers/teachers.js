import { teachersQueries } from '../db/queries.js'

export const getTeachers = async (fastify) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(teachersQueries.getAll)
    return rows
  }
  finally {
    client.release()
  }
}

export const getTeacherById = async (fastify, id) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(teachersQueries.getById, [id])
    return rows[0] || null
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
    return { type: 'success', message: 'Преподаватель добавлен!' }
  }
  finally {
    client.release()
  }
}
