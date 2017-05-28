import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired

  }

  onIncrement = () => {
    console.log('dispatch');
    this.props.dispatch({ type: 'INCREMENT' })
  }

  onDecrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  componentDidMount() {
    console.log('mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)

  }

  incrementAsync = () => {
    setTimeout(this.onIncrement, 1000);
  }

  render() {
    console.log(this.props);
    const { value } = this.props;

    return (
      <div>
        <p>
          Clicked: <span>{value}</span> times
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
          <button onClick={this.incrementIfOdd}>Increment if odd</button>
          <button onClick={this.incrementAsync}>Increment async</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const value = state;
  return { value }
}

// const mapDispatchToProps = (dispatch) => ({
//   // onIncrement: () => dispatch({ type: 'INCREMENT' }),
//   // onDecrement: () => dispatch({ type: 'DECREMENT' })
//   dispatch: dispatch
// })

export default connect(mapStateToProps)(App);
