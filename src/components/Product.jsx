import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const iphoneAPI = 'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=1';
const options = {
    method: 'GET',
    headers: { Accept: 'application/json' }
};

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        listProduct(iphoneAPI, options);
    }, [])

    const listProduct = (url, options) => {
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json.data.phones);
                setProduct(json.data.phones);
            });
    }


    const cardProduct = (item) => {
        return (
            <div className="card my-3 py-4" key={item.slug} style={{ width: "18rem", borderRadius: "25px" }}>
                <img src={item.image} className="card-img-top mx-auto" alt={item.phone_name} style={{ width: "80%" }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.phone_name}</h5>
                    <NavLink to={`/product/${item.slug}`} className="btn btn-outline-primary">Detail</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h1>Produk</h1>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-around">
                    {product.map(cardProduct)}
                </div>
            </div>
        </>
    )
}

export default Product