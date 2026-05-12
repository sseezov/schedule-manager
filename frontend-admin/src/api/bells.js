async function fetchBellsByScheduleId(scheduleId) {
  try {
    const response = await fetch(`/apiv1/bells/${scheduleId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Fetch error:', error);
  }
}

async function updateBellsByScheduleId(scheduleId, bells) {
  try {
    const response = await fetch(`/apiv1/bells/${scheduleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bells),
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

export { fetchBellsByScheduleId, updateBellsByScheduleId };
