import "./loginnav.scss";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { toggleActions } from "../../../Redux/Features/toggleSlice";

const Loginnav = () => {
    const dispatcher = useDispatch;
    const loggingOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Signed out");
            })
            .catch((error) => {
                toast.error(error.message);
            });
        dispatcher(toggleActions.profileToggle());
    };
    const hideToggle = () => {
        dispatcher(toggleActions.profileToggle());
    };

    return (
        <div className="loginnav">
            <Link to="/login" className="loginnav-login" onClick={hideToggle}>
                <h3 className="loginnav-text">Login</h3>
            </Link>
            <Link
                to="/register"
                className="loginnav-register"
                onClick={hideToggle}>
                <h3 className="loginnav-text">Register</h3>
            </Link>
            <Link to="/" className="loginnav-register" onClick={loggingOut}>
                <h3 className="loginnav-text">Logout</h3>
            </Link>
        </div>
    );
};

export default Loginnav;
