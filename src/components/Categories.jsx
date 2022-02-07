import React from 'react';
import '../App.css'
import { useSelector } from 'react-redux';
export default function Categories() {
  const products = useSelector((state) => state.allproduct.products);
  var categories = [{
    
  }];
  products.map((product) => {
    if(!categories.includes(product.category)){
      categories.push({category:product.category,count:1});
    }
    else {
      categories.map((cat) => {
        if (cat.category === product.category) {
          cat.count++;
        }
      });
    }
   
  });
  console.log(categories);
  return <div>
    
  </div>;
}
