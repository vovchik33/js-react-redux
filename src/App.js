import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { connect } from 'react-redux';
import store from './store';
import { increment } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.clickCounterIncrement = this.clickCounterIncrement.bind(this);
  }
  clickCounterIncrement() {
    //this.props.counter.dispatch(increment());
    console.log("CLICKED" + JSON.stringify(this.props));
    store.dispatch(increment(2));
  }

  render() {
    console.log("RENDER"+this.props.value);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Header />
        {this.props.value}
        <button onClick={this.clickCounterIncrement}>+</button>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  console.log("mapStateToProps "+JSON.stringify(store));
  return {
    value: store.value
  };
}

export default connect(mapStateToProps)(App);
