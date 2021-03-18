import React, { Component } from 'react';
import Counter from './counter'; 

class Counters extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <h5>Counters Present</h5>
        <Counter><h5>Children Here passed thru</h5></Counter>
      </div>);
  }
}
 
export default Counters;