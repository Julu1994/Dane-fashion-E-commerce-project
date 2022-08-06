import "./input.scss";
import React from "react";

const Input = (props) => {
    const { text, type, onchange } = props;
    return (
        <div className="input">
            <label className="input-main">
                <input
                    className="input-field"
                    type={type}
                    onChange={onchange}
                />
                <span className="input-placeholder">{text}</span>
            </label>
        </div>
    );
};

export default Input;
