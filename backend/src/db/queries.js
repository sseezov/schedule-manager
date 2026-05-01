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

export const subjectsQueries = {
  getAll: 'SELECT * FROM subjects ORDER BY name',
  create: 'INSERT INTO subjects (name, abbreviation) VALUES ($1, $2)',
  update: 'UPDATE subjects SET name = $1, abbreviation = $2 WHERE id = $3',
  delete: 'DELETE FROM subjects WHERE id = $1',
};
