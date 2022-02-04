import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Productcomponent from './Productcomponent';


export default function Productlist() {
  const products = useSelector((state) => state);
  console.log(products);
  return <div>
    <br/>
    <div className="container">
      <Productcomponent />
    </div>
  </div>;
}
