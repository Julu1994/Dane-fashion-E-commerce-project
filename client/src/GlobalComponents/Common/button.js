import "./button.scss";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Button = ({ text, color, type }) => {
    return (
        <div className="main">
            <button type={type} className={`btn ${color}`}>
                {text}
            </button>{" "}
        </div>
    );
};

export default Button;

export const GoogleButton = ({ onclick }) => {
    return (
        <div className="main" onClick={onclick}>
            <div className="btn bg-blue">
                <FcGoogle size={25} className=" google-icon" />
                Login with google
            </div>
        </div>
    );
};
