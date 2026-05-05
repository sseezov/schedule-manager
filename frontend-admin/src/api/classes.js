async function fetchClasses() {
  try {
    const response = await fetch('/apiv1/classes');
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

async function createClass(data) {
  try {
    const response = await fetch('/apiv1/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

async function updateClass(data) {
  try {
    const response = await fetch('/apiv1/classes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
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

async function deleteClass(classId) {
  try {
    const response = await fetch('/apiv1/classes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(classId),
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

export { fetchClasses, createClass, updateClass, deleteClass };
