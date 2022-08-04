import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const baseAPI = "https://api-mobilespecs.azharimm.site/v2/"
const options = {
    method: 'GET',
    headers: { Accept: 'application/json' }
};

const ProductDetail = () => {
    const param = useParams();
    const detailAPI = baseAPI + param.id;

    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios.get(detailAPI, options)
            .then(res => {
                console.log(res.data.data)
                setDetail(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [detailAPI])

    const listSpec = detail.specifications?.map((item) =>
        <p className="card-text">
            <b>{item.title}</b>
            {
                item.specs?.map((spec) =>
                    <ul>{spec.key} : {
                        spec.val?.map((value) =>
                            <ol>{value}</ol>
                        )
                    }</ul>
                )
            }
        </p>
    );

    // const lengthImage = detail.phone_images;
    // console.log(lengthImage);

    const listImage = detail.phone_images?.map((img) => {
        //console.log(img)
        console.log(detail.phone_images[0])
        if (img === detail.phone_images[0]) {
            return (
                <div className="carousel-item active">
                    <img src={img} className="d-block w-75 mx-auto" alt="..." />
                </div>
            )
        } else {
            return (
                <div className="carousel-item">
                    <img src={img} className="d-block w-75 mx-auto" alt="..." />
                </div>
            )
        }
    })

    let index = 0;
    let no = 1;
    const listIndicator = detail.phone_images?.map((img) => {
        index++;
        if (img === detail.phone_images[0]) {
            return (
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            )
        } else {
            return (
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide` + no + `` + index}></button>
            )
        }
    })

    return (
        <>
            <div className="container py-5 z-depth-1">

                <section className="text-center">
                    <h3 className="font-weight-bold mb-5">Detail Produk</h3>
                    <div className="row">

                        <div className="col-lg-4">
                            {/* <img src={detail.thumbnail} className="d-block w-50 mx-auto" alt="..." /> */}

                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    {listIndicator}
                                    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button> */}

                                </div>
                                <div className="carousel-inner">
                                    {listImage}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-7 text-center text-md-left">
                            <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                                <strong>{detail.phone_name}</strong>
                            </h2>
                            <h5>Brand : {detail.brand}</h5>
                            <div className="card mt-3">
                                <div className="card-header">
                                    Spesifikasi
                                </div>
                                <div className="card-body" style={{ textAlign: "left" }}>
                                    <p className="card-text"><b>Dimension</b> : {detail.dimension}</p>
                                    <p className="card-text"><b>OS</b> : {detail.os}</p>
                                    <p className="card-text"><b>Release Date</b> : {detail.release_date}</p>
                                    <p className="card-text"><b>Storage</b> : {detail.storage}</p>
                                    <p className="card-text"><b>Specifications</b> :
                                        {
                                            detail.storage
                                        }
                                        <ul>{listSpec}</ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default ProductDetail