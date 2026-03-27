export async function fetchTeachers() {
  try {
    const response = await fetch('/apiv1/teachers')
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
