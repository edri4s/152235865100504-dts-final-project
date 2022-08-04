import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../login.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../config/firebase';

const Register = () => {

    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
                alert("Success create account")
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
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
                            <img src="https://img.freepik.com/free-vector/cartoon-character-filling-form-survey-checklist-man-writing-test-signing-business-medical-document-flat-illustration_74855-20483.jpg"
                                className="img-fluid" alt="Sample" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <h1>Register</h1>
                            {/* <form> */}
                            <div className="form-floating mb-3">
                                <input type="email" id="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" id="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button onClick={signUp} className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Daftar
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Sudah punya akun? &nbsp;
                                    <NavLink className="link-danger" to="/login">
                                        Login
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

export default Register