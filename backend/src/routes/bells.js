import { getBells } from '../controllers/bells.js'

export default async function teachersRoutes(fastify) {
  fastify.get('/bells', async (req, reply) => {
    const bells = await getBells(fastify)
    reply.send(bells)
  })

  // fastify.post('/teachers', async (req, reply) => {
  //   const result = await createTeacher(fastify, req.body)
  //   reply.status(201).send(result)
  // })

  // fastify.put('/teachers', async (req, reply) => {
  //   const result = await updateTeacher(fastify, req.body)
  //   reply.status(201).send(result)
  // })

  // fastify.delete('/teachers', async (req, reply) => {
  //   const teacherId = req.body
  //   const result = await deleteTeacher(fastify, teacherId)
  //   reply.status(201).send(result)
  // })
}
