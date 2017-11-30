import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      count: 0
    }
    this.isPrime = this.isPrime.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
  }

  isPrime(number) {
    for (var i = 2 ; i < number ; i ++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  increaseCount() {
    let count = this.state.count;
    let className = 'counter';
    if (count === 100) {
      return;
    } else {
      count = count + 1;
    }
    if (count % 5 === 3) {
      className += ' greenCounter'
    } else if (this.isPrime(count)) {
      className += ' blueCounter'
    } else if (count > 0 && count % 10 === 0) {
      className += ' circleCounter'
    }

    this.setState({
      className: className,
      count: count
    })
  }

  render() {
    return (
    <div className='container'>
      <div className={this.state.className}>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Click me</button>
      </div>
  </div>
    )
  }
}
