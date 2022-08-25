import React from "react";
import "./select.scss";

const Select = (props) => {
    const { label, options, selectName, onchange } = props;

    return (
        <div className="select">
            <label>{label}</label>
            <select
                name={selectName}
                onChange={onchange}
                className="select-main">
                {options.map((item) => (
                    <option value={item} key={item} className="select-option">
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
