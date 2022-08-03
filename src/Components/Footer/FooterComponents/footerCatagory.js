import "./footerCatagory.scss";
import React from "react";
import FooterButton from "./footerButton";

const FooterCatagory = ({ click, showcatagory }) => {
    return (
        <div className="links">
            <div className="links-main">
                <h4 className="links-header">Catagory</h4>
                <FooterButton click={click} />
            </div>
            {showcatagory && (
                <ul className="links-list">
                    <li className="links-item">
                        <a className="links-address" href="/contact">
                            Men
                        </a>
                    </li>
                    <li className="links-item">
                        <a className="links-address" href="/contact">
                            Woman
                        </a>
                    </li>
                    <li className="links-item">
                        <a className="links-address" href="/contact">
                            Kids
                        </a>
                    </li>
                    <li className="links-item">
                        <a className="links-address" href="/contact">
                            New Arrivals
                        </a>
                    </li>
                    <li className="links-item">
                        <a className="links-address" href="/contact">
                            Popular Now
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default FooterCatagory;
