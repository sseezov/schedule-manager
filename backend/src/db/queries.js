export const teachersQueries = {
  getAll: 'SELECT * FROM teachers',
  create: 'INSERT INTO teachers (name, fio, position) VALUES ($1, $2, $3) RETURNING *',
  update: 'UPDATE teachers SET name = $1, fio = $2, position = $3 WHERE id = $4 RETURNING *',
  delete: 'DELETE FROM teachers WHERE id = $1',
};

export const bellsQueries = {
  getScheduleById: 'SELECT id, name, lessons_in_day as "lessonsInDay", weekdays FROM schedules WHERE id = $1',
  getByScheduleId: `
    SELECT
      id,
      schedule_id as "scheduleId",
      lesson_number as "lessonNumber",
      start_time as "startTime",
      end_time as "endTime"
    FROM bells
    WHERE schedule_id = $1
    ORDER BY lesson_number
  `,
  upsert: `
    INSERT INTO bells (schedule_id, lesson_number, start_time, end_time)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (schedule_id, lesson_number)
    DO UPDATE SET
      start_time = EXCLUDED.start_time,
      end_time = EXCLUDED.end_time
  `,
  deleteExtra: 'DELETE FROM bells WHERE schedule_id = $1 AND lesson_number > $2',
};

export const groupsQueries = {
  getAll: `
    SELECT
      id,
      name,
      abbreviation,
      year_of_admission as "yearOfAdmission"
    FROM groups
    ORDER BY id
  `,
  create: 'INSERT INTO groups (name, year_of_admission, abbreviation) VALUES ($1, $2, $3) RETURNING *',
  update: 'UPDATE groups SET name = $1, abbreviation = $2, year_of_admission = $3 WHERE id = $4 RETURNING *',
  delete: 'DELETE FROM groups WHERE id = $1',
};

export const classesQueries = {
  getAll: 'SELECT id, name, abbreviation, capacity, building FROM classes ORDER BY id',
  create: 'INSERT INTO classes (name, abbreviation, capacity, building) VALUES ($1, $2, $3, $4) RETURNING *',
  update: 'UPDATE classes SET name = $1, abbreviation = $2, capacity = $3, building = $4 WHERE id = $5 RETURNING *',
  delete: 'DELETE FROM classes WHERE id = $1',
};

export const subjectsQueries = {
  getAll: 'SELECT * FROM subjects ORDER BY name',
  create: 'INSERT INTO subjects (name, abbreviation) VALUES ($1, $2)',
  update: 'UPDATE subjects SET name = $1, abbreviation = $2 WHERE id = $3',
  delete: 'DELETE FROM subjects WHERE id = $1',
};

// db/queries.js (обнови queries)
export const lessonsQueries = {
  // Существующий запрос для getLessonsByScheduleId
  getByScheduleId: `
    SELECT 
      l.id,
      l.weekday,
      l.classroom,
      l.group_id as "groupId",
      g.name as "groupName",
      g.abbreviation as "groupAbbr",
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
    WHERE l.schedule_id = $1
    ORDER BY l.group_id, l.weekday
  `,

  getAll: `
    SELECT 
      l.id,
      l.group_id as "groupId",
      g.name as "groupName",
      g.abbreviation as "groupAbbr",
      l.teacher_id as "teacherId",
      t.fio as "teacherName",
      l.subject_id as "subjectId",
      s.name as "subjectName",
      s.abbreviation as "subjectAbbr",
      l.lessons_count as "lessonsCount"
    FROM lessons l
    JOIN groups g ON l.group_id = g.id
    JOIN teachers t ON l.teacher_id = t.id
    JOIN subjects s ON l.subject_id = s.id
    ORDER BY g.name, s.name
  `,
  create: `
    INSERT INTO lessons (group_id, teacher_id, subject_id, lessons_count, schedule_id) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING id
  `,
  update: `
    UPDATE lessons 
    SET group_id = $1, teacher_id = $2, subject_id = $3, lessons_count = $4
    WHERE id = $5
  `,
  delete: 'DELETE FROM lessons WHERE id = $1',
};

export const schedulesQueries = {
  getAll: 'SELECT id, name, created, lessons_in_day as "lessonsInDay", weekdays FROM schedules ORDER BY id',
  create: `
    INSERT INTO schedules (name, lessons_in_day, weekdays)
    VALUES ($1, $2, $3)
    RETURNING id, lessons_in_day as "lessonsInDay"
  `,
  update: 'UPDATE schedules SET name = $1, lessons_in_day = $2, weekdays = $3 WHERE id = $4',
  delete: 'DELETE FROM schedules WHERE id = $1',
};
