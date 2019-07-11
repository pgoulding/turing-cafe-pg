import React, { Component } from 'react'
import './form.css'
import PropTypes from 'prop-types'

export class Form extends Component {
  constructor() {
    super()
    this.state={
      name:'',
      date:'',
      time:'',
      number:''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addReservation = e => {
    e.preventDefault()
    const newReservation ={
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
  }

  render() {
    return (
      <form className='form'>
        <input 
        type='text'
        placeholder='Name'
        name='name'
        value={this.state.name}
        onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={e => this.addReservation(e)}>Make Reservation</button>
      </form>
    )
  }
}

Form.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  number: PropTypes.number
}

export default Form
