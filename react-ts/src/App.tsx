import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './views/About';
import User from './views/User';
import Vmodel from './views/Vmodel'

import './App.css';
import logo from './assets/img/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Router>
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Link className="App-title" to={`/`} >Home |&nbsp;</Link>
                  <Link className="App-title" to={`/About`} >About |&nbsp;</Link>
                  <Link className="App-title" to={`/User`} >User |&nbsp;</Link>
                  <Link className="App-title" to={`/vmodel`} >Vmodel</Link>
              </header>
              <p className="App-intro">
                  To get started, edit <code>src/App.tsx</code> and save to reload.
              </p>
              {/*<Route exact path="/" component={ App } />*/}
              <Route path="/about" component={ About } />
              <Route path="/user" component={ User } />
              <Route path="/vmodel" component={ Vmodel } />
          </div>
      </Router>
    );
  }
}

export default App;
