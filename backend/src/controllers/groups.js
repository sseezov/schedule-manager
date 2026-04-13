import { groupsQueries } from '../db/queries.js'

export const getGroups = async (fastify) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(groupsQueries.getAll)
    return rows
  }
  finally {
    client.release()
  }
}

export const createGroup = async (fastify, data) => {
  console.log(11, data);
  const client = await fastify.pg.connect()
  try {
    await client.query(groupsQueries.create, [
      data.name,
      data.year_of_admission,
      data.abbreviation,
    ])
    return { message: 'Группа добавлена!' }
  }
  finally {
    client.release()
  }
}
