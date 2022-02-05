import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
export default function Productdetail() {
  const { productid } = useParams();
  const products = useSelector((state) => state.allproduct.products);
  const product = products.find((product) => product.id === productid);
  useEffect(() => {
    console.log(product);
  }, [product]);
  return <div>
    <br/>
      <h1>Product details</h1>
      
  </div>;
}
