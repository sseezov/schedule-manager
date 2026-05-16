// api/workloads.js

// Получить все нагрузки (для левой панели)
async function fetchWorkloads() {
  try {
    const response = await fetch('/apiv1/workloads');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

// Создать новую нагрузку (предмет + преподаватель + группа + пар в неделю)
async function createWorkload(data) {
  try {
    const response = await fetch('/apiv1/workloads', {
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

// Удалить нагрузку
async function deleteWorkload(workloadId) {
  try {
    const response = await fetch('/apiv1/workloads', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workloadId),
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

export { fetchWorkloads, createWorkload, deleteWorkload };
