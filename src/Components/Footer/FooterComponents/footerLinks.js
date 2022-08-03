import "./footerLinks.scss";
import React from "react";
import FooterButton from "./footerButton";

const FooterLinks = (props) => {
    const { click, showlink } = props;
    return (
        <div className="links">
            <div className="links-main">
                <h4 className="links-header">Useful Links</h4>
                <FooterButton click={click} />
            </div>
            {showlink && (
                <ul className="links-list">
                    <li className="links-item">
                        <a className="links-address" href="/contact">
                            About Us
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
                            FAQ
                        </a>
                    </li>
                    <li className="links-item">
                        <a className="links-address" href="/contact">
                            Contacts
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default FooterLinks;
