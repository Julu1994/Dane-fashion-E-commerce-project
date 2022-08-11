import React from "react";

const Select = (props) => {
    const { label, options, selectName, onchange } = props;

    return (
        <div>
            <label>{label}</label>
            <select name={selectName} onChange={onchange}>
                {options.map((item) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
