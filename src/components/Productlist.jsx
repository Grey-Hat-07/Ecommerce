import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Productcomponent from './Productcomponent';
import { setproducts } from '../Redux/actions/Productactions';

export default function Productlist() {
  const products = useSelector((state) => state);
  
  const dispatch = useDispatch();
  let url=`https://fakestoreapi.com/products`;
  const getproduct=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    dispatch(setproducts(data));
    // return data;
  }
  useEffect(()=>{
    getproduct();
  },[]) 
  console.log(products,"product");
  return <div>
    <br/>
    <div className="container">
      <Productcomponent />
    </div>
  </div>;
}
