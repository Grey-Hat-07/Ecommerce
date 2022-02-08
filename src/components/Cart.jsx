import React from 'react';
import '../App.css';
import { Delete } from './Icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removefromcart } from '../Redux/actions/Productactions';

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const renderCart = cart.map((product) => {
    var { id, title, image, price, rating, category } = product;
    if (title.length > 20) {
      title = title.substring(0, 40) + '...';
    }
    return (
      <div className=" " key={id}>
        <button className="btn btn-danger" onClick={
          () => dispatch(removefromcart(product))
        }><Delete/></button>
        <Link to={`/productdetail/${id}`}className='text-decoration-none text-dark'>
        <div className="card cardhover">
          <div className="card-body">
            <img src={image} className="floatimg" alt={title} height="200" />
            <h3 className="card-title">{title}</h3>
            <h6 className="text-muted">{category} </h6>
            <p className="card-text">₹{price} </p>
            <h6 className="card-text">⭐{rating.rate}&emsp;{rating.count} rating </h6>
          </div>
        </div>
        </Link>
      </div>);
  });

  return <div className='container'>
      <br/><br/>
      {
        cart?renderCart:<h1>no item in cart</h1>
      }
  </div>;
}
