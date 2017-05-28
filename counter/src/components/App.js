import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <p>
          Clicked: <span>{value}</span> times
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
          <button onClick={this.incrementIfOdd}>Increment if odd</button>
          <button onClick={this.incrementAsync}>Increment async</button>
        </p>
      </div>
    );
  }
}

export default App;
