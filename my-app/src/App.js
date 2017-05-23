import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Mounting calls:
// 1. constructor()
// 2. componentWillMount()
// 3. render()
// 4. componentDidMount()

// Updating: (when props or state changes, component re-renders? state persists?)
// 1. componentWillReceiveProps()
// 2. shouldComponentUpdate()
// 3. componentWillUpdate()
// 4. render()
// 5. componentDidUpdate()

// Unmounting:
// 1. componentWillUnmount()
class Demo extends Component {
  constructor() {
    super();
    // console.log(this.props.name, 'constructor');
    this.state = {
      foo: true
    }
  }

  render() {
    console.log(this.props.name, 'render');
    // this demonstrates that state is non persistent
    // it will reset when component rerenders
    // use a store in flux if persistent data is needed
    return (
      <div>
        {this.state.foo ? "true" : "false"}
        <button onClick={() => {this.setState({foo:!this.state.foo})}}>change me!</button>
        <div>{this.props.name}: {this.props.now}</div>
      </div>
    );
  }

  componentWillMount() {
    console.log(this.props.name, 'componentWillMount');
  }

  componentDidMount() {
    console.log(this.props.name, 'componentDidMount');
  }

  componentWillReceiveProps() {
    console.log(this.props.name, 'componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log(this.props.name, 'shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log(this.props.name, 'componentWillUpdate');
  }

  componentDidUpdate() {
    console.log(this.props.name, 'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log(this.props.name, 'componentWillUnmount');
  }
}

Demo.defaultProps = {
  bar: console.log('defaultProps'),
};

class App extends Component {
  constructor() {
    console.log('app constructor called');
    super();
    this.state = {
      now: Date.now(),
      killStuff: false
    };
    this.setStateWithConsoleGroup = this.setStateWithConsoleGroup.bind(this);
    this.changeStuff = this.changeStuff.bind(this);
    this.killStuff = this.killStuff.bind(this);
    this.unKillStuff = this.unKillStuff.bind(this);
  }

  setStateWithConsoleGroup(state) {
    console.group();
    this.setState(state, () => {
      console.groupEnd(); // callback
    });
  }

  changeStuff() {
    this.setStateWithConsoleGroup({
      now: Date.now()
    });
  }

  killStuff() {
    console.log(this);
    this.setStateWithConsoleGroup({ killStuff: true });
  }

  unKillStuff() {
    this.setStateWithConsoleGroup({ killStuff: false });
  }

  render() {
    // react way of doing if else statements
    // this triggers component mounting/unmounting
    return (
      <div>
        <button onClick={this.changeStuff}>Change now</button>
        <button onClick={this.killStuff}>Kill stuff</button>
        <button onClick={this.unKillStuff}>Unkill stuff</button>
        {!this.state.killStuff && (
          <div>
            <Demo now={this.state.now} name="one"/>
          </div>
        )}
      </div>
    );
  }
}

export default App;
