import React from "react";
import { NavLink } from "react-router-dom";

function CartBtn() {
    return (
        <>
            <NavLink className="btn btn-sm btn-light ms-2" to="/login">
                <i className="fa fa-shopping-cart ms-1"></i> Cart (0)
            </NavLink>
        </>
    )
}

export default CartBtn;
