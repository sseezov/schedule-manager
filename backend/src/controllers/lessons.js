import { lessonsQueries } from '../db/queries.js';

export const getLessonsByScheduleId = async (fastify, scheduleId) => {
  const client = await fastify.pg.connect();
  try {
    // Получаем размещённые уроки через запрос из queries
    const { rows: lessons } = await client.query(
      lessonsQueries.getByScheduleId, 
      [scheduleId]
    );

    // Получаем информацию о расписании
    const { rows: scheduleInfo } = await client.query(`
      SELECT id, name, lessons_in_day as "lessonsInDay", weekdays
      FROM schedules
      WHERE id = $1
    `, [scheduleId]);

    // Получаем все группы
    const { rows: groups } = await client.query(`
      SELECT id, name, abbreviation
      FROM groups
      ORDER BY name
    `);

    // Получаем все предметы
    const { rows: subjects } = await client.query(`
      SELECT id, name, abbreviation
      FROM subjects
      ORDER BY name
    `);

    // Получаем всех учителей
    const { rows: teachers } = await client.query(`
      SELECT id, fio, position, color
      FROM teachers
      ORDER BY fio
    `);

    // Получаем всю нагрузку (для левой панели)
    const { rows: workloads } = await client.query(`
      SELECT 
        w.id,
        w.group_id as "groupId",
        g.name as "groupName",
        g.abbreviation as "groupAbbr",
        w.teacher_id as "teacherId",
        t.fio as "teacherName",
        w.subject_id as "subjectId",
        s.name as "subjectName",
        s.abbreviation as "subjectAbbr",
        w.lessons_per_week as "lessonsPerWeek"
      FROM workloads w
      JOIN groups g ON w.group_id = g.id
      JOIN teachers t ON w.teacher_id = t.id
      JOIN subjects s ON w.subject_id = s.id
      ORDER BY g.name, s.name
    `);

    return {
      schedule: scheduleInfo[0],
      lessons,
      groups,
      subjects,
      teachers,
      workloads,
    };
  }
  finally {
    client.release();
  }
};

export const getLessons = async (fastify) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(lessonsQueries.getAll);
    return rows;
  }
  finally {
    client.release();
  }
};

export const deleteLesson = async (fastify, scheduleLessonId) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(lessonsQueries.delete, [scheduleLessonId]);
    return { message: 'Урок удалён из расписания!' };
  }
  catch (error) {
    console.error('Error deleting schedule lesson:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};
