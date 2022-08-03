import "./footerLinks.scss";
import React from "react";

const FooterLinks = () => {
    return (
        <div className="links">
            <h4 className="links-header">Useful Links</h4>
            <ul className="links-list">
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        About Us
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        FAQ
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        Location
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        Partners
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterLinks;
