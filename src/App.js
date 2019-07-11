import React, { Component } from 'react';
import './App.css';
import fetchReservations from './apiFetch'
import ReservationContainer from './ReservationContainer'

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


  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        {this.state.reservations && <ReservationContainer data={this.state.reservations} /> }
      </main>
    )
  }
}

export default App;
