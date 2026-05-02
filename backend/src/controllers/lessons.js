export const getLessons = async (fastify) => {
  const client = await fastify.pg.connect();

  try {
    // Получаем все уроки с информацией о группах, предметах и учителях
    const { rows: lessons } = await client.query(`
      SELECT 
        l.id,
        l.weekday,
        l.lesson_number as "lessonNumber",
        l.classroom,
        l.group_id as "groupId",
        g.name as "groupName",
        g.abbreviation as "groupShortName",
        l.subject_id as "subjectId",
        sub.name as "subjectName",
        sub.abbreviation as "subjectAbbr",
        l.teacher_id as "teacherId",
        t.fio as "teacherName",
        t.position as "teacherPosition"
      FROM lessons l
      JOIN groups g ON l.group_id = g.id
      JOIN subjects sub ON l.subject_id = sub.id
      JOIN teachers t ON l.teacher_id = t.id
      ORDER BY l.group_id, l.weekday, l.lesson_number
    `);

    // Получаем информацию о расписании (schedules)
    const { rows: schedules } = await client.query(`
      SELECT 
        id,
        name,
        created,
        lessons_in_day as "lessonsInDay",
        weekdays
      FROM schedules
      ORDER BY id
    `);

    // Получаем все группы
    const { rows: groups } = await client.query(`
      SELECT id, name, abbreviation as "abbreviation"
      FROM groups
      ORDER BY name
    `);

    // Получаем все предметы
    const { rows: subjects } = await client.query(`
      SELECT id, name, abbreviation as "abbreviation"
      FROM subjects
      ORDER BY name
    `);

    // Получаем всех учителей
    const { rows: teachers } = await client.query(`
      SELECT id, fio, position, color
      FROM teachers
      ORDER BY fio
    `);

    return {
      lessons,
      schedules,
      groups,
      subjects,
      teachers,
    };
  }
  finally {
    client.release();
  }
};
