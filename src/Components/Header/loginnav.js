import "./loginnav.scss";
import React from "react";
import { Link } from "react-router-dom";

const Loginnav = () => {
    return (
        <div className="loginnav">
            <Link to="/login" className="loginnav-login">
                <h3 className="loginnav-text">Login</h3>
            </Link>
            <Link to="/register" className="loginnav-register">
                <h3 className="loginnav-text">Register</h3>
            </Link>
        </div>
    );
};

export default Loginnav;
