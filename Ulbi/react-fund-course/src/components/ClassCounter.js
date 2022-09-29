import React, { Component } from 'react';

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      value: 10,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.incrementValue = this.incrementValue.bind(this);
  }

  increment() {
    console.log(this);
    this.setState(state => ({
      likes: state.likes + 1,
    }));
  }

  decrement() {
    this.setState(state => ({
      ...state,
      likes: state.likes - 1,
    }));
  }

  incrementValue() {
    this.setState(state => ({
      ...state,
      likes: state.likes + state.value,
    }));
  }

  updateInputValue(value) {
    this.setState(state => ({
      ...state,
      value: value,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.likes}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <input type="number" value={this.state.value} onChange={event => this.updateInputValue(+event.target.value)} />
        <button onClick={this.incrementValue}>Increment Value</button>
      </div>
    );
  }
}
