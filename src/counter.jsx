import React, { Component } from 'react';

class Counter extends Component {

  render() { 
    console.log("Printing:",this.props.children);
    return (
      <React.Fragment>
        {this.props.children}
        <h1>Hello from one Counter!</h1>
      </React.Fragment>
      );
  }
}
 
export default Counter;