import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Card from './Card';
import List from './List';
import faker from 'faker';

const users = [];
let numUsers = 0;
while (numUsers < 50) {
  const user = {
    name: faker.name.findName(),
    image: faker.image.avatar(),
    quote: faker.lorem.sentence(),
  };
  users.push(user);
  numUsers++;
}

const Data = [
  {
    name: 'Kate',
    image: 'https://miro.medium.com/fit/c/240/240/0*yIBEf5iZoTdv3CMH.',
    quote: [
      `I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.`,
      '-Herbert Bayard Swope',
    ],
  },
  {
    name: 'Cate',
    image:
      'https://images.unsplash.com/photo-1505481354248-2ba5d3b9338e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdf10e1615dc7c122da9b74cd9cfcc0f&auto=format&fit=crop&w=668&q=80',
    quote: [
      `Through the years I have been known by many names. Diablo Gato, The Furry Lover, Chupa Cabra, Frisky Two Times and then The Gingerhead man. But to most I am Puss in Boots, outlaw!`,
      '-Puss in Boots',
    ],
  },
];
// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

class App extends Component {
  render() {
    // console.log(users);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          {/* <Card user={Data[0]} />
          <Card user={Data[1]} /> */}

          {/* {list.map(item => (
            <List key={item.objectID} list={item} />
          ))} */}
          {users.map(item => (
            <List key={`${numUsers}${item.name}`} list={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
