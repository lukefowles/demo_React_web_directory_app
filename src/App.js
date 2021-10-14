import React from 'react';
import './style.css';
import CardList from './components/CardList';

class App extends React.Component {
  //describes the initial state of the class
  //avoiding adding arguments to constructors in react
  //and instead change the state through methods
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      //this is a string in javascript object notation
      //so need to call JSON to turn into native javascript object
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users: users });
      });
  }

  render() {
    if (this.state.users.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return <CardList users={this.state.users} />;
    }
  }
}

export default App;
