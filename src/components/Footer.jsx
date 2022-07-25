import React from 'react';
import '../login.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2022 | Edri Adi Setiawan
                </div>

                {/* Sosial Media */}
                <div>
                    <NavLink to="#!" className="text-white me-4">
                        <i className="fa fa-facebook-f"></i>
                    </NavLink>
                    <NavLink to="#!" className="text-white me-4">
                        <i className="fa fa-twitter"></i>
                    </NavLink>
                    <NavLink to="#!" className="text-white">
                        <i className="fa fa-linkedin"></i>
                    </NavLink>
                </div>
                {/* Sosial Media */}
            </div>


        </>
    )
}

export default Footer