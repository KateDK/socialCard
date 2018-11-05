import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './List';

import users from '../UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    this.setState({ users: [...users] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <List userList={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
