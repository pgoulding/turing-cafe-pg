import React from 'react'
import './reservation-style.css'


const Reservation = ({resData}) => {
  const {id, name, date, time, number} = resData

  const removeReservation = (id) => {

  }

  return (
    <section className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests {number}</p>
      <button onClick={this.props.removeReservation(id)}>Cancel</button>
    </section>
  )
}

export default Reservation
