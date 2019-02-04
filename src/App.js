import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const welcomeMsg = 'Welcome to the Road to Learn React.';
    const user = {
      firstName: 'Artur',
      lastName: 'Nunes'
    };
    return (
      <div className="App">
        <h2>{welcomeMsg}</h2>
        <h4>Be Our Guest {user.firstName} {user.lastName}!</h4>
      </div>
    );
  }
}

export default App;
