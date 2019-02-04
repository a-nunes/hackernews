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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      users,
    };
    this.onDismissList = this.onDismissList.bind(this);
    this.onDismissUser = this.onDismissUser.bind(this);
  }

  onDismissList(id){
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onDismissUser(id){
    const isNotId = user => user.objectID !== id;
    const updatedUsers = this.state.users.filter(isNotId);
    this.setState({ users: updatedUsers });
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
            <span>
              <button
                onClick={() => this.onDismissList(item.objectID)}
                type="button">
                  Dismiss
              </button>
            </span>
          </div>
        )}
        {this.state.users.map((user) =>
          <div key={user.objectID}>
            <span>{user.firstName} </span>
            <span>{user.lastName}</span>
            <span>
              <button
                onClick={() => this.onDismissUser(user.objectID)}
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
