import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';

import CounterComponent from './components/counter';

let store = configureStore();

class App extends Component {

  render() {


    return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CRA-REDUX-OBSERVABLE</h1>
        </header>
        <p className="App-intro">
          Try the 1 second delayed counter below. All powererd by
          <b> Create-React-App, Redux, Redux-Observable, and RxJS 6</b>
        </p>
        <p>
          Try clicking the Button below with the Redux Chrome Extension Installed
        </p>
        <CounterComponent />
      </div>
    </Provider>
    );
  }

  mapStateToProps = state => {
    return {
      counter: state.counterReducer
    }
  }

  mapDispatchToProps = dispatch => {
    return {
      increase: () => {
        dispatch({type: "INCREASE"})
      }
    }
  }


}




export default App;
