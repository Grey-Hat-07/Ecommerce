import Navbar from './components/Navbar';
import React from 'react';
import ProductsDetail from './components/ProductsDetail';
import Productlist from './components/Productlist';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div><br/>
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route path="/productdetail/:productid" component={ProductsDetail} />
        <Route>404 Not Found</Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
