import "./avater.scss";
import React from "react";

const Avater = ({ name, onclick }) => {
    const nameAlphabet = name.toUpperCase().slice(0, 2);
    return (
        <div className="avater" onClick={onclick}>
            {nameAlphabet}
        </div>
    );
};

export default Avater;
