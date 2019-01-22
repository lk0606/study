import React, { Component } from 'react';
import logo from './assets/image/logo.svg';
import './assets/css/App.css';
import Test from './components/Test'
import Home from './components/Home'
class App extends Component {
  // 模板  jsx
  render() {
    return (
      <div className="App">
        <header className="App-header" >
            <Test/>
            <Home/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
