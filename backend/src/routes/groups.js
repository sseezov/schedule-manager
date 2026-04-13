import { createGroup, getGroups } from '../controllers/groups.js'

export default async function teachersRoutes(fastify) {
  fastify.get('/groups', async (req, reply) => {
    const groups = await getGroups(fastify)
    reply.send(groups)
  })

  fastify.post('/groups', async (req, reply) => {
    const result = await createGroup(fastify, req.body)
    reply.status(201).send(result)
  })
}
