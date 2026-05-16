import { getLessons, getLessonsByScheduleId, deleteLesson } from '../controllers/lessons.js';

export default async function scheduleLessonsRoutes(fastify) {
  // Получить все размещённые уроки
  fastify.get('/lessons', async (req, reply) => {
    const scheduleLessons = await getLessons(fastify);
    reply.send(scheduleLessons);
  });

  // Получить уроки по расписанию (для сетки)
  fastify.get('/lessons/schedule/:scheduleId', async (req, reply) => {
    const { scheduleId } = req.params;
    console.log(111111111, scheduleId);
    const scheduleLessons = await getLessonsByScheduleId(fastify, scheduleId);
    console.log(22222222, scheduleLessons);
    reply.send(scheduleLessons);
  });

  // Удалить размещённый урок
  fastify.delete('/lessons', async (req, reply) => {
    const scheduleLessonId = req.body;
    const result = await deleteLesson(fastify, scheduleLessonId);
    reply.send(result);
  });
}
