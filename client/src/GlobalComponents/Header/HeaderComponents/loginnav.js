import "./loginnav.scss";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase/config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../../Redux/Features/toggleSlice";

const Loginnav = () => {
    const isUser = useSelector((state) => state.user.userInfo);
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
    const hideToggle = (e) => {
        dispatcher(toggleActions.profileToggle());
    };

    return (
        <div className="loginnav">
            {isUser.id && (
                <div className="loginnav-user">
                    <h3>{isUser.email}</h3>
                    <Link
                        to="/"
                        className="loginnav-register"
                        onClick={loggingOut}>
                        <h3 className="loginnav-text">Logout</h3>
                    </Link>
                    <Link
                        to="/order"
                        className="loginnav-register"
                        onClick={hideToggle}>
                        <h3 className="loginnav-text">Order History</h3>
                    </Link>
                </div>
            )}
            {!isUser.id && (
                <div className="loginnav-user">
                    <Link
                        to="/login"
                        className="loginnav-login"
                        onClick={hideToggle}>
                        <h3 className="loginnav-text">Login</h3>
                    </Link>
                    <Link
                        to="/register"
                        className="loginnav-register"
                        onClick={hideToggle}>
                        <h3 className="loginnav-text">Register</h3>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Loginnav;
