import "./input.scss";
import React from "react";

const Input = ({ text, type }) => {
    return (
        <div className="input">
            <input className="input-field" type={type} />
            <label className="input-placeholder">{text}</label>
        </div>
    );
};

export default Input;
