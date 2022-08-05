import "./input.scss";
import React from "react";

const Input = ({ text, type }) => {
    return (
        <div className="input">
            <label className="input-main">
                <input className="input-field" type={type} />
                <span className="input-placeholder">{text}</span>
            </label>
        </div>
    );
};

export default Input;
