import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './List';
import faker from 'faker';

//Create fake data:
const users = [];
let numUsers = 0;
(function createUsers() {
  while (numUsers < 50) {
    const user = {
      name: faker.name.findName(),
      image: faker.image.avatar(),
      quote: faker.lorem.sentence(),
    };
    user.id = `${numUsers}${user.name}`;
    users.push(user);
    numUsers++;
  }
})();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <List userList={users} />
        </div>
      </div>
    );
  }
}

export default App;
