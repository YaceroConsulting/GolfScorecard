import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import reactLogo from './logo.svg';
import ScorecardsList from './components/ScorecardsList';
import Scorecard from './components/Scorecard.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <img className="App-logo" 
            src="http://yacero.se/app/themes/yacero/dist/images/logo.png"
            alt="app-logo"></img>
        </header>
        <main className="App-main">
          <Router>
            <Route exact path="/" component={ScorecardsList} />
            <Route path="/scorecard/:id" component={Scorecard} />
          </Router>

        </main>
        <footer className="App-footer">
          <img src={reactLogo} className="React-logo" alt="react-logo" />
          <div className="App-footer-text-box">
            <span>Powered by React</span>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn React
            </a>
          </div>
        </footer>
    </div>
  );
}

export default App;