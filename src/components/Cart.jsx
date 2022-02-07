import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Cart() {
  const cart = useSelector((state) => state.cart.addtocart);
  console.log(cart);
  const renderist = () => {
    var { id, title, image, price, rating, category } = cart;
    if (title.length > 20) {
      title = title.substring(0, 30) + '...';
    }
    return (
      <div className=" " key={id}>
        <Link to={`/productdetail/${id}`}className='text-decoration-none text-dark'>
        <div class="card cardhover">
          <div class="card-body">
            <img src={image} className="floatimg" alt={title} height="200" />
            <h3 class="card-title">{title}</h3>
            <h6 class="text-muted">{category} </h6>
            <p class="card-text">₹{price} </p>
            <h6 class="card-text">⭐{rating.rate}&emsp;{rating.count} rating </h6>
          </div>
        </div>
        </Link>
      </div>);
  }
  return <div className='container'>
    <h1>
      hello from cart
      hello from Cart
      {
        cart?renderist():<h1>no item in cart</h1>
      }
    </h1>
  </div>;
}
