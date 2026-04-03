export async function createTeacher(data) {
  try {
    const response = await fetch('/apiv1/teachers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
    // return { type: 'success', message: 'Преподаватель успешно создан!' }
  }
  catch (error) {
    return { type: 'error', message: error.message }
  }
}
