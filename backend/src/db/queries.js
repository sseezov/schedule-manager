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

export const workloadsQueries = {
  getAll: `
    SELECT 
      w.id,
      w.group_id as "groupId",
      g.name as "groupName",
      g.abbreviation as "groupAbbr",
      w.teacher_id as "teacherId",
      t.fio as "teacherName",
      t.position as "teacherPosition",
      w.subject_id as "subjectId",
      s.name as "subjectName",
      s.abbreviation as "subjectAbbr",
      w.lessons_per_week as "lessonsPerWeek",
      w.created_at as "createdAt",
      w.updated_at as "updatedAt"
    FROM workloads w
    JOIN groups g ON w.group_id = g.id
    JOIN teachers t ON w.teacher_id = t.id
    JOIN subjects s ON w.subject_id = s.id
    ORDER BY g.name, s.name
  `,
  
  create: `
    INSERT INTO workloads (group_id, teacher_id, subject_id, lessons_per_week)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `,
  
  update: `
    UPDATE workloads 
    SET group_id = $1, 
        teacher_id = $2, 
        subject_id = $3, 
        lessons_per_week = $4,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = $5
  `,
  
  delete: 'DELETE FROM workloads WHERE id = $1',
};

export const lessonsQueries = {
  // Получить все размещённые уроки
  getAll: `
    SELECT 
      sl.id as "scheduledLessonId",
      sl.schedule_id as "scheduleId",
      sl.workload_id as "workloadId",
      sl.weekday,
      sl.lesson_number as "lessonNumber",
      sl.classroom,
      w.group_id as "groupId",
      g.name as "groupName",
      g.abbreviation as "groupAbbr",
      w.teacher_id as "teacherId",
      t.fio as "teacherName",
      t.position as "teacherPosition",
      w.subject_id as "subjectId",
      s.name as "subjectName",
      s.abbreviation as "subjectAbbr",
      w.lessons_per_week as "lessonsPerWeek"
    FROM schedule_lessons sl
    JOIN workloads w ON sl.workload_id = w.id
    JOIN groups g ON w.group_id = g.id
    JOIN teachers t ON w.teacher_id = t.id
    JOIN subjects s ON w.subject_id = s.id
    ORDER BY sl.schedule_id, g.name, sl.weekday, sl.lesson_number
  `,
  
  // Получить уроки по конкретному расписанию
  getByScheduleId: `
    SELECT 
      sl.id as "scheduledLessonId",
      sl.schedule_id as "scheduleId",
      sl.workload_id as "workloadId",
      sl.weekday,
      sl.lesson_number as "lessonNumber",
      sl.classroom,
      w.group_id as "groupId",
      g.name as "groupName",
      g.abbreviation as "groupAbbr",
      w.teacher_id as "teacherId",
      t.fio as "teacherName",
      t.position as "teacherPosition",
      w.subject_id as "subjectId",
      s.name as "subjectName",
      s.abbreviation as "subjectAbbr",
      w.lessons_per_week as "lessonsPerWeek"
    FROM schedule_lessons sl
    JOIN workloads w ON sl.workload_id = w.id
    JOIN groups g ON w.group_id = g.id
    JOIN teachers t ON w.teacher_id = t.id
    JOIN subjects s ON w.subject_id = s.id
    WHERE sl.schedule_id = $1
    ORDER BY g.name, sl.weekday, sl.lesson_number
  `,
  
  // Создать урок в расписании
  create: `
    INSERT INTO schedule_lessons (workload_id, schedule_id, weekday, lesson_number, classroom)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
  `,
  
  // Обновить урок в расписании
  update: `
    UPDATE schedule_lessons 
    SET workload_id = $1, classroom = $2, updated_at = CURRENT_TIMESTAMP
    WHERE id = $3
    RETURNING id
  `,
  
  // Удалить урок из расписания
  delete: 'DELETE FROM schedule_lessons WHERE id = $1',
  
  // Найти урок по ячейке
  findByCell: `
    SELECT id FROM schedule_lessons 
    WHERE schedule_id = $1 AND weekday = $2 AND lesson_number = $3
  `,
  
  // Удалить урок по ячейке
  deleteByCell: `
    DELETE FROM schedule_lessons 
    WHERE schedule_id = $1 AND weekday = $2 AND lesson_number = $3
  `,
};
