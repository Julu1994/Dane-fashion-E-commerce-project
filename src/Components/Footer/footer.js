import "./footer.scss";
import React, { useState } from "react";
import FooterContact from "./FooterComponents/footerContact";
import FooterLinks from "./FooterComponents/footerLinks";
import FooterSocial from "./FooterComponents/footerSocial";
import FooterCatagory from "./FooterComponents/footerCatagory";

const Footer = () => {
    const [showLink, setShowLink] = useState(true);
    const [showCatagory, setShowCatagory] = useState(true);

    const linkDropdown = () => {
        setShowLink(!showLink);
        console.log("showLink");
    };
    const catagoryDropdown = () => {
        setShowCatagory(!showCatagory);
        console.log("catagory");
    };
    return (
        <div className="footer">
            <div className="footer-main">
                <FooterSocial />
                <FooterLinks click={linkDropdown} showlink={showLink} />
                <FooterCatagory
                    click={catagoryDropdown}
                    showcatagory={showCatagory}
                />
                <FooterContact />
            </div>
        </div>
    );
};

export default Footer;
