/**
 * @typedef {object} TeacherDTO
 * @property {number} id
 * @property {string|null} name
 * @property {string|null} fio
 * @property {string|null} position
 * @property {string|null} color
 */

/**
 * @typedef {object} CreateTeacherBody
 * @property {string} fio
 * @property {string} abbr
 * @property {string|null} position
 */

/**
 * @typedef {object} UpdateTeacherBody
 * @property {number} id
 * @property {string} fio
 * @property {string} abbr
 * @property {string|null} position
 */

/**
 * @typedef {object} TeacherActionResult
 * @property {'success'|'error'} type
 * @property {string} message
 */

export {};
