import "./footerButton.scss";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FooterButton = () => {
    return (
        <button className="btn">
            <AiOutlinePlus size={20} />
        </button>
    );
};

export default FooterButton;
