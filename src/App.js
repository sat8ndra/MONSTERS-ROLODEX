import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'frankenstein'
        },
        {
          name: 'Drakula'
        },
        {
          name: 'kremlin'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.monsters.map(monster => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
