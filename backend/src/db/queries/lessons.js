export const lessonsQueries = {
  getByScheduleId: `
    SELECT 
      sl.id,
      sl.schedule_id as "scheduleId",
      sl.weekday,
      sl.lesson_number as "lessonNumber",
      sl.classroom,
      sl.group_id as "groupId",
      sl.group_name as "groupName",
      sl.group_abbr as "groupAbbr",
      sl.teacher_id as "teacherId",
      sl.teacher_name as "teacherName",
      sl.subject_id as "subjectId",
      sl.subject_name as "subjectName",
      sl.subject_abbr as "subjectAbbr"
    FROM schedule_lessons sl
    WHERE sl.schedule_id = $1
    ORDER BY sl.group_name, sl.weekday, sl.lesson_number
  `,

  findByCell: `
    SELECT id FROM schedule_lessons 
    WHERE schedule_id = $1 AND weekday = $2 AND lesson_number = $3 AND group_id = $4
  `,

  getWorkloadData: `
    SELECT 
      w.group_id,
      g.name as group_name,
      w.teacher_id,
      t.fio as teacher_name,
      w.subject_id,
      s.name as subject_name,
      s.abbreviation as subject_abbr
    FROM workloads w
    JOIN groups g ON w.group_id = g.id
    JOIN teachers t ON w.teacher_id = t.id
    JOIN subjects s ON w.subject_id = s.id
    WHERE w.id = $1
  `,

  create: `
    INSERT INTO schedule_lessons (
      schedule_id, weekday, lesson_number, classroom,
      group_id, group_name,
      teacher_id, teacher_name,
      subject_id, subject_name, subject_abbr
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING id
  `,

  delete: 'DELETE FROM schedule_lessons WHERE id = $1',
};
