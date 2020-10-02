import React, { Component } from 'react';
import './App.css';
import CircleSelector from './circelselector';
import Circles from './circles'

class App extends Component {
  handleCircleOne = () => {
    this.setState({})
  }

  handleCircleTwo = () => {
    this.setState({})
  }
  handleCircleThree = () => {
    this.setState({})
  }
  handleCircleFour = () => {
    this.setState({})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;