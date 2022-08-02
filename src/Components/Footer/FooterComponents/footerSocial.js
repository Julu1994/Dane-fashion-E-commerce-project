import "./footerSocial.scss";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import {
    AiFillTwitterCircle,
    AiOutlineInstagram,
    AiFillYoutube,
} from "react-icons/ai";

const FooterSocial = () => {
    const alertMessage = () => {
        alert("Social media links will be available soon");
    };
    return (
        <div className="social">
            <h3 className="social-header">
                Dane<span className="social-dot">.</span>com
            </h3>
            <p className="social-text">
                If you wanna get updated with our new products and events,
                follow us on your favourite social media.
            </p>
            <div className="social-icons">
                <MdFacebook
                    size={25}
                    className="social-icons-item"
                    onClick={alertMessage}
                />
                <AiFillTwitterCircle
                    size={25}
                    className="social-icons-item"
                    onClick={alertMessage}
                />
                <AiOutlineInstagram
                    size={25}
                    className="social-icons-item"
                    onClick={alertMessage}
                />
                <FaTiktok
                    size={25}
                    className="social-icons-item"
                    onClick={alertMessage}
                />
                <AiFillYoutube
                    size={25}
                    className="social-icons-item"
                    onClick={alertMessage}
                />
            </div>
        </div>
    );
};

export default FooterSocial;
