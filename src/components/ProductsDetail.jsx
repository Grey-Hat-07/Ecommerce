import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
export default function ProductsDetail() {
  let { productid } = useParams();
  console.log(productid);
  return <div>
      <h1>

        ProductsDetail
        this is a test for the new feature
        do not forget to commit this
        do nothing
      </h1>
      <p>{productid}</p>

  </div>;
}
