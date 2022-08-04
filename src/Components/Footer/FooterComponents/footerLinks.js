import "./footerLinks.scss";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const FooterLinks = (props) => {
    const { click, showlink } = props;
    return (
        <div className="links">
            <div className="links-main">
                <h4 className="links-header">Useful Links</h4>
                <button className="links-btn">
                    <AiOutlinePlus onClick={click} size={20} />
                </button>
            </div>
            {showlink && (
                <ul className="links-list">
                    <li className="links-item">
                        <Link className="links-address" to="/">
                            About Us
                        </Link>
                    </li>
                    <li className="links-item">
                        <Link className="links-address" to="/">
                            Location
                        </Link>
                    </li>
                    <li className="links-item">
                        <Link className="links-address" to="/">
                            Partners
                        </Link>
                    </li>
                    <li className="links-item">
                        <Link className="links-address" to="/">
                            FAQ
                        </Link>
                    </li>
                    <li className="links-item">
                        <Link className="links-address" to="/">
                            Contacts
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default FooterLinks;
