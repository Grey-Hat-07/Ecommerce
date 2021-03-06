import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
export default function Navbar() {
  let style={
    zIndex: '100',
  }
  return <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbarstyle" style={style}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> E-Commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/cart' className="nav-link">Cart</Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>;
}
