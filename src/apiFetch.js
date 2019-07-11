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

const sendReservation = async (reservation) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify({...reservation }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    const result = await response.json()
    return result
  } catch (error) {
    Error('failed to post')
  }
}

export {fetchReservations, sendReservation}