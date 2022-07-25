import React from "react";
import { NavLink } from "react-router-dom";

function LoginBtn() {
  return (
    <>
      <NavLink className="btn btn-sm btn-primary ms-1" to="/login">
        <i className="fa fa-sign-in me-1"></i> Login
      </NavLink>
    </>
  )
}

export default LoginBtn;
