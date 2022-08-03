import "./footerLinks.scss";
import React from "react";
import FooterButton from "./footerButton";

const FooterLinks = (props) => {
    const { first, second, third, fourth, fifth, sixth } = props;
    return (
        <div className="links">
            <div className="links-main">
                <h4 className="links-header">{first}</h4>
                <FooterButton />
            </div>
            <ul className="links-list">
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        {second}
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        {third}
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        {fourth}
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        {fifth}
                    </a>
                </li>
                <li className="links-item">
                    <a className="links-address" href="/contact">
                        {sixth}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterLinks;
