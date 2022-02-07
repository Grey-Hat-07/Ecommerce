import React from 'react';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { Cart, Buy } from './Icons';
import { useParams } from 'react-router-dom';
import { addtocart } from '../Redux/actions/Productactions';
export default function ProductsDetail() {
  
  const { productid } = useParams();
  const products = useSelector((state) => state.allproduct.products);
  const dispatch = useDispatch();
  return <div className='container mt-4'>
      <div className="row">
        <div className="col-md-5">
          <img src={products[productid-1].image} className="card-img-top" alt={products[productid-1].title} height="400" />
        </div>
        <div className="col-md-7">
          <h3>{products[productid-1].title}</h3>
          <p className='text-muted'>{products[productid-1].category}</p>

          <p>₹{products[productid-1].price}</p>
          <p>⭐{products[productid-1].rating.rate}&emsp;
          {products[productid-1].rating.count} Ratings</p> 
          <p>{products[productid-1].description}</p>
          <button className="btn btn-warning mt-3 py-2 buttonhover" onClick={()=>{ dispatch(addtocart(products[productid-1]))}}>
            <Cart />
            Add to cart
            </button>
            <button className="btn btn-info ms-3 mt-3 py-2 buttonhover">
            <Buy />
            Buy product
            </button>

          </div>
      </div>
  </div>;
}
