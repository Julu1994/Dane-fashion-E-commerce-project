import "./loginnav.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/config";
import { ToastContainer, toast } from "react-toastify";

const Loginnav = () => {
    const [logout, setLogout] = useState(true);
    const loggingOut = () => {
        signOut(auth)
            .then(() => {
                toast("Signed out");
                setLogout(false);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="loginnav">
            <ToastContainer />
            <Link to="/login" className="loginnav-login">
                <h3 className="loginnav-text">Login</h3>
            </Link>
            <Link to="/register" className="loginnav-register">
                <h3 className="loginnav-text">Register</h3>
            </Link>
            {logout && (
                <Link to="/" className="loginnav-register" onClick={loggingOut}>
                    <h3 className="loginnav-text">Logout</h3>
                </Link>
            )}
        </div>
    );
};

export default Loginnav;
