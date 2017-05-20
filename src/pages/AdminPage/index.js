import React, { Component } from 'react';

export default class AdminPage extends Component {
  state = { }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Hello Thinkful</p>
        {this.props.todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </div>
    );
  }
}
