import "./footerLinks.scss";
import React from "react";

const FooterLinks = () => {
    return (
        <div className="links">
            <h4 className="links-header">Useful Links</h4>
            <ul>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">Location</a>
                </li>
                <li>
                    <a href="#">Partners</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default FooterLinks;
