import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <>
            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-2">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <h2 className="font-weight-light">Tentang Kami</h2>
                            <p className="font-italic text-muted mb-4">
                                Ini adalah website mengenai data informasi spesifikasi produk-produk <b>APPLE</b>.
                                User dapat melihat detail spesifikasi dari beberapa kategori produk-produk <b>APPLE</b> seperti
                                iPhone, iPad, dan lain-lain. Untuk melihat apa saja berbagai produk <b>APPLE</b> bisa mengunjungi
                                website resminya
                            </p>
                            <a href="https://www.apple.com" className="btn btn-warning px-3 rounded-pill shadow-sm" target="_blank" rel="noreferrer">Apple Website</a>
                            <NavLink to={`/contact`} className="btn btn-primary ms-2 px-3 rounded-pill shadow-sm">Kontak kami</NavLink>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About