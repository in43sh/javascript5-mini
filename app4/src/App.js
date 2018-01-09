import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const displayCars = this.state.cars.map((car, i) => {
      return (
        <div>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <p>{car.color}</p>
          <p>{car.price}</p>
          <p>{car.year}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {/* {this.state.cars} */}
        { displayCars }
      </div>
    );
  }
}

export default App;
