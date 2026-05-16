// Получить все размещённые уроки для конкретного расписания
async function fetchLessons(scheduleId) {
  try {
    const response = await fetch(`/apiv1/lessons/schedule/${scheduleId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Fetch error:', error);
    return { schedule: null, scheduledLessons: [], groups: [], subjects: [], teachers: [], workloads: [] };
  }
}

// Удалить урок из расписания
async function deleteLesson(scheduledLessonId) {
  try {
    const response = await fetch('/apiv1/lessons', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scheduledLessonId),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const message = await response.json();
    return { type: 'success', ...message };
  }
  catch (error) {
    return { type: 'error', message: error.message };
  }
}

// api/scheduleLessons.js

// Установить урок в расписание (создать или обновить)
async function setLesson(data) {
  try {
    const response = await fetch('/apiv1/lessons', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const message = await response.json();
    return { type: 'success', ...message };
  }
  catch (error) {
    return { type: 'error', message: error.message };
  }
}

// Удалить урок из расписания
async function removeLesson(scheduleLessonId) {
  try {
    const response = await fetch('/apiv1/lessons', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scheduleLessonId),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const message = await response.json();
    return { type: 'success', ...message };
  }
  catch (error) {
    return { type: 'error', message: error.message };
  }
}

export { fetchLessons, deleteLesson, setLesson, removeLesson };
