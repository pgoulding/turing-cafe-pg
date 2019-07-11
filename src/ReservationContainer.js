import React from 'react'
import Reservation from './Reservation'
import './reservation-container-style.css'
const ReservationContainer = ({data}) => {
  const resCards = data.map(res => {
    return <Reservation resData={res} key={res.id} />
  })
  return (
    <article className='container'>
      {resCards}
    </article>
  )
}

export default ReservationContainer
