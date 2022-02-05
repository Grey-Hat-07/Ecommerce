import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
export default function Productcomponent() {
    const products = useSelector((state) => state.allproduct.products);
    const renderist = products.map((product) => {
        var { id, title, image, price, rating, category } = product;
        if(title.length>20){
            title=title.substring(0,30)+"...";
        }
        return (<div className="col-md-4 mb-2 " key={id}>
            <Link to={`/product/${id}`}className='text-decoration-none text-dark'>
                <div className="card cardstyle cardhover">
                    <img src={image} className="card-img-top" alt={title} height="200" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{category}</p>
                        <p className="card-text">₹{price}</p>
                        <p className="card-text">⭐{rating.rate}</p>
                    </div>
                </div>
        </Link>
        </div>
        )
    });
    return (
        <>
            {
                renderist
            }
        </>
    );
}
