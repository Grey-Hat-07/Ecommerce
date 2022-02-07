import Navbar from './components/Navbar';
import React, { Fragment } from 'react';
import { Footer } from './components/Footer';
import ProductsDetail from './components/ProductsDetail';
import Productlist from './components/Productlist';
import Categories from './components/Categories';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <div><br />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Fragment>
            <Categories />
            <Productlist />
          </Fragment>} />
          <Route path="/productdetail/:productid" component={ProductsDetail} />
          <Route path="/cart" component={Cart} />
          <Route>404 Not Found</Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
