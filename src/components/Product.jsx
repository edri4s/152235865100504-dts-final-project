import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const brandsAPI = "https://api-mobilespecs.azharimm.site/v2/brands";
const iphoneAPI = 'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=1';
//const interestPhone = "https://api-mobilespecs.azharimm.site/v2/top-by-interest";
const options = {
    method: 'GET',
    headers: { Accept: 'application/json' }
};

const Product = () => {
    const [brand, setBrand] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log('dawd')
        listProduct(iphoneAPI, options);
        listBrand(brandsAPI, options);
    }, [])

    const listBrand = (url, options) => {
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json.data);
                setBrand(json.data);
            });
    }

    const listProduct = (url, options) => {
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json.data.phones);
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

    const handlerOnClick = (detail) => {
        return () => {
            listProduct(detail, options);
        }
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

            <nav className="navbar navbar-expand-lg justify-content-between">
                <div className="container">
                    <ul className="navbar-nav mx-auto">
                        {brand && brand.filter(value => value.brand_name === 'Apple' || value.brand_name === 'Asus' || value.brand_name === 'Oppo' || value.brand_name === 'Samsung' || value.brand_name === 'vivo' || value.brand_name === 'Xiaomi').map(({ brand_id, brand_name, detail }) => {
                            return (
                                <li className="nav-item" key={brand_id}>
                                    <button onClick={handlerOnClick(detail)} className="btn btn-outline-dark px-3 ms-1 rounded-pill shadow-sm">{brand_name} </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>

            <div className="container">
                <div className="row justify-content-around">
                    {product.map(cardProduct)}
                </div>
            </div>
        </>
    )
}

export default Product