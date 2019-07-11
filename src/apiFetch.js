const fetchReservations = async () => {
  try {
    const url = 'http://localhost:3001/api/v1/reservations'
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    Error('failed to fetch')
  }
}

export default fetchReservations