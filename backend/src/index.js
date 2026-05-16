import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'node:path';
import fastifyPostgres from '@fastify/postgres';
import { loadEnvFile } from 'node:process';

loadEnvFile('.env');

const __dirname = import.meta.dirname;

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyPostgres, {
  connectionString: process.env.CONNECTION_STRING,
});

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../builds'),
  wildcard: false,
});

fastify.register(async (fastify) => {
  await fastify.register(import('./routes/teachers.js'), { prefix: '/apiv1' });
  await fastify.register(import('./routes/bells.js'), { prefix: '/apiv1' });
  await fastify.register(import('./routes/subjects.js'), { prefix: '/apiv1' });
  await fastify.register(import('./routes/groups.js'), { prefix: '/apiv1' });
  await fastify.register(import('./routes/lessons.js'), { prefix: '/apiv1' });
  await fastify.register(import('./routes/schedules.js'), { prefix: '/apiv1' });
  await fastify.register(import('./routes/classes.js'), { prefix: '/apiv1' });
  await fastify.register(import('./routes/workloads.js'), { prefix: '/apiv1' });
});

fastify.get('/', (req, reply) => reply.redirect('/admin'));
fastify.get('/admin*', (req, reply) => reply.sendFile('admin/index.html'));
fastify.get('/public*', (req, reply) => reply.sendFile('public/index.html'));

try {
  await fastify.listen({ port: 3000 });
}
catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
