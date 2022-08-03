import "./footerLinks.scss";
import React from "react";

const FooterLinks = (props) => {
    const { first, second, third, fourth, fifth, sixth } = props;
    return (
        <div className="links">
            <h4 className="links-header">{first}</h4>
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
