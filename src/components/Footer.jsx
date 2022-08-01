import React from 'react';
import '../login.css';

function Footer() {
    return (
        <>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2022 | Edri Adi Setiawan
                </div>

                {/* Sosial Media */}
                <div>
                    <a href="https://web.facebook.com/edri4s" className="text-white me-4">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/edri4s" className="text-white me-4">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/edri_4s" className="text-white me-4">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/edri-adi-setiawan-609626109" className="text-white me-4">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                {/* Sosial Media */}
            </div>


        </>
    )
}

export default Footer