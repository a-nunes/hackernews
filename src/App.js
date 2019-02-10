import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const users = [
  {
    firstName: 'Artur',
    lastName: 'Nunes',
    objectID: 0,
  },
  {
    firstName: 'Paola',
    lastName: 'Nunes',
    objectID: 1,
  },
  {
    firstName: 'Igor',
    lastName: 'Nunes',
    objectID: 2,
  },
  {
    firstName: 'Mayara',
    lastName: 'Silva',
    objectID: 3,
  },
];

const isSearched = searchTerm =>
  item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      users,
      searchTerm: "",
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismissUser = this.onDismissUser.bind(this);
  }

  onDismiss(id){
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onDismissUser(id){
    const isNotId = user => user.objectID !== id;
    const updatedUsers = this.state.users.filter(isNotId);
    this.setState({ users: updatedUsers });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, list, users } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <form>
        <input
          type="text"
          value={value}
          onChange = {onChange}
        />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const {list, pattern, onDismiss} = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
            <span>
              <button
                onClick={() => onDismiss(item.objectID)}
                type="button">
                  Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
