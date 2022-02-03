import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import About from './components/About ';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" >
          <About/>
        </Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
