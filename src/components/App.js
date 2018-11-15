import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './List';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

// import users from '../UserList';
import data from '../UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    this.setState({ users: [...data.users] });
  }

  render() {
    console.log('data', data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <RightSide />
          <List userList={this.state.users} />
          <LeftSide />
        </div>
      </div>
    );
  }
}

export default App;
