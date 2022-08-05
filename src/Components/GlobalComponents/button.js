import "./button.scss";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Button = ({ text, color }) => {
    return (
        <div className="main">
            <div className={`btn ${color}`}>{text}</div>{" "}
        </div>
    );
};

export default Button;

export const GoogleButton = () => {
    return (
        <div className="main">
            <div className="btn bg-blue">
                <span>
                    <FcGoogle size={25} />{" "}
                </span>
                <span className="title">LOGIN WITH GOOGLE</span>
            </div>
        </div>
    );
};
