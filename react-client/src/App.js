import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// views
import Home from './views/Home';
import About from './views/About';

// components
// import ReactLoading from './components/ReactLoading';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
