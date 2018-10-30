import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Card from './Card';

const Data = {
  user: {
    name: 'Kate',
    image: 'https://miro.medium.com/fit/c/240/240/0*yIBEf5iZoTdv3CMH.',
    quote: [
      `I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.`,
      '-Herbert Bayard Swope',
    ],
  },
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
        <div>
          <p>content</p>
          <Card user={Data.user} />
        </div>
      </div>
    );
  }
}

export default App;
