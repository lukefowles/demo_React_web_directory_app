import React from 'react';
import './style.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  //describes the initial state of the class
  //avoiding adding arguments to constructors in react
  //and instead change the state through methods
  constructor() {
    super();
    this.state = {
      users: [],
      searchBoxTerm: "",
      filteredUserList: []
    };
  }

  //User defined functions in React classes should be arrow functions (syntax)
  onSearchChange = (event) => {
    this.setState({searchBoxTerm: event.target.value});
    const filteredUsers = this.state.users.filter((users) => {
      return users.name.toLowerCase().includes(this.state.searchBoxTerm.toLowerCase())
    });
    this.setState( {filteredUserList : filteredUsers} );
    //console.log(filteredUsers);
    //console.log(`this ${this.state.filteredUserList.length}`);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      //this is a string in javascript object notation
      //so need to call JSON to turn into native javascript object
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users: users });
        this.setState({filteredUserList : users});
      });
  }

  render() {
    //const filteredUsers = this.state.users.filter((users) => {
      //return users.name.toLowerCase().includes(this.state.searchBoxTerm.toLowerCase())
    //});

    if (this.state.users.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <SearchBox searchChange = {this.onSearchChange} />
          <CardList users={this.state.filteredUserList} />
        </div>
      );
    }
  }
}

export default App;

//In react information flows in one direction, from parent to child through props

//refactored code to ensure filtering of the user occured within the onSearchChange function
