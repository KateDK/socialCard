import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Card from './Card';
import List from './List';

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
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Card user={Data.user} />
          <Card user={Data.user} />

          {list.map(item => (
            <List list={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
