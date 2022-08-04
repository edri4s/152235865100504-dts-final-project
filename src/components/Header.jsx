import React from "react";
import { NavLink } from "react-router-dom";
// import CartBtn from "./buttons/CartBtn";
import LoginBtn from "./buttons/LoginBtn";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold" to="/">
                        <img src="/assets/images/enggang.png" alt="logo" width={'30px'} />
                        <span style={{ color: "yellow" }}> Techno</span> <span style={{ color: "#fff" }}>Spech</span>
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="asaksnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5 mb-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Produk
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    Tentang
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Kontak
                                </NavLink>
                            </li>
                        </ul>


                        <LoginBtn />
                        {/* <CartBtn /> */}
                    </div>


                </div>
            </nav>
        </>
    );
}

export default Header;
