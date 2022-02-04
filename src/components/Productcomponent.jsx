import React from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
export default function Productcomponent() {
    const products = useSelector((state) => state.allproduct.products);
    const { id, name, category } = products[0];
    return <div>
        <br />
        <div className="card cardstyle">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{category}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>;
}
