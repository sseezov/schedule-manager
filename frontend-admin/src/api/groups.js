async function fetchGroups() {
  try {
    const response = await fetch('/apiv1/groups')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  }
  catch (error) {
    console.error('Fetch error:', error)
  }
}

async function createGroup(data) {
  try {
    const response = await fetch('/apiv1/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const message = await response.json()
    return { type: 'success', ...message }
  }
  catch (error) {
    return { type: 'error', message: error.message }
  }
}

async function updateGroup(data) {
  try {
    const response = await fetch('/apiv1/groups', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const message = await response.json()
    return { type: 'success', ...message }
  }
  catch (error) {
    return { type: 'error', message: error.message }
  }
}

async function deleteGroup(GroupId) {
  try {
    const response = await fetch('/apiv1/groups', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(GroupId),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const message = await response.json()
    return { type: 'success', ...message }
  }
  catch (error) {
    return { type: 'error', message: error.message }
  }
}

export { fetchGroups, createGroup, updateGroup, deleteGroup }
