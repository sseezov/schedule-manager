async function fetchBells() {
  try {
    const response = await fetch('/apiv1/bells')
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

export { fetchBells }
