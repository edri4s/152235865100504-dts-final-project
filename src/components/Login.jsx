import React from 'react';
import { NavLink } from 'react-router-dom';
import '../login.css';

const Login = () => {
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://img.freepik.com/free-vector/hand-holding-phone-with-screen-lock-flat-vector-illustration-person-entering-pin-code-password-smartphone-safety-security-protection-concept-banner-website-design-landing-web-page_74855-24655.jpg"
                                className="img-fluid" alt="Sample" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <h1>Login</h1>
                            <form>

                                <div className="form-floating mb-3">
                                    <input type="text" id="username" className="form-control"
                                        placeholder="Username" />
                                    <label htmlFor="username">Username</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" id="password" className="form-control"
                                        placeholder="Enter password" />
                                    <label htmlFor="password">Password</label>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{ 'padding-left': '2.5rem', 'padding-right': '2.5rem' }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Belum punya akun? &nbsp;
                                        <NavLink className="link-danger" to="/register">
                                            Register
                                        </NavLink>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login