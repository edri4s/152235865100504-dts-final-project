import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../config/firebase';
const Login = () => {

    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Login success")
            })
            .catch((error) => {
                const errorCode = error.code;
                //const errorMessage = error.message;
                console.log(errorCode);
                alert(errorCode)
            });
    }


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
                            {/* <form> */}

                            <div className="form-floating mb-3">
                                <input type="email" id="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" id="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button onClick={signIn} className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Belum punya akun? &nbsp;
                                    <NavLink className="link-danger" to="/register">
                                        Register
                                    </NavLink>
                                </p>
                            </div>

                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login