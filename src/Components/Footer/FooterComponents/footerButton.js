import "./footerButton.scss";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FooterButton = ({ click }) => {
    return (
        <button className="btn" onClick={click}>
            <AiOutlinePlus size={20} />
        </button>
    );
};

export default FooterButton;
