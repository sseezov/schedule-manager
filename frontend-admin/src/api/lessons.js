async function fetchLessonsByScheduleId(scheduleId) {
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
    return { schedule: null, lessons: [], groups: [], subjects: [], teachers: [] };
  }
}

async function createPair(data) {
  try {
    const response = await fetch('/apiv1/lessons', {
      method: 'POST',
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

async function deletePair(lessonId) {
  try {
    const response = await fetch('/apiv1/lessons', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lessonId),
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

export { fetchLessonsByScheduleId, createPair, deletePair };
