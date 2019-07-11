import React, { Component } from 'react';
import './App.css';
import {fetchReservations, sendReservation} from './apiFetch'
import ReservationContainer from './ReservationContainer'
import Form from './Form'
class App extends Component {
  constructor() {
    super()
    this.state={
      reservations:[]
    }
  }

  componentDidMount(){
    fetchReservations()
      .then(reservations => this.setState({reservations:[...reservations]}))
      .catch(error => console.error(error))
  }

  addReservation = (newRes) => {
    this.setState({reservations: [...this.state.reservations, newRes]})
    sendReservation(newRes)
  }



  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        {this.state.reservations && <ReservationContainer data={this.state.reservations} /> }
      </main>
    )
  }
}

export default App;
