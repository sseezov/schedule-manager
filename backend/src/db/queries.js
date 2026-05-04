export const teachersQueries = {
  getAll: 'SELECT * FROM teachers',
  create: 'INSERT INTO teachers (name, fio, position) VALUES ($1, $2, $3) RETURNING *',
  update: 'UPDATE teachers SET name = $1, fio = $2, position = $3 WHERE id = $4 RETURNING *',
  delete: 'DELETE FROM teachers WHERE id = $1',
};

export const bellsQueries = {
  getAll: 'SELECT * FROM bells',
  create: 'INSERT INTO teachers (name, fio, position) VALUES ($1, $2, $3) RETURNING *',
  update: 'UPDATE teachers SET name = $1, fio = $2, position = $3 WHERE id = $4 RETURNING *',
  delete: 'DELETE FROM teachers WHERE id = $1',
};

export const groupsQueries = {
  getAll: 'SELECT * FROM groups',
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

export const lessonsQueries = {
  getAll: 'SELECT * FROM lessons ORDER BY name',
};

export const schedulesQueries = {
  getAll: 'SELECT id, name, created, lessons_in_day as "lessonsInDay", weekdays FROM schedules ORDER BY id',
  create: 'INSERT INTO schedules (name, lessons_in_day, weekdays) VALUES ($1, $2, $3)',
  update: 'UPDATE schedules SET name = $1, lessons_in_day = $2, weekdays = $3 WHERE id = $4',
  delete: 'DELETE FROM schedules WHERE id = $1',
};
