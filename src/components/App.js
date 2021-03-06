import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './List';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

// import users from '../UserList';
import data from '../data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    this.setState({
      users: [...data.users],
      user: { ...data.user },
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <LeftSide user={this.state.user} />
          <List userList={this.state.users} />
          <RightSide />
        </div>
      </div>
    );
  }
}

export default App;
