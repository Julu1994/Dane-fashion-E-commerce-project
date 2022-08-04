import "./footer.scss";
import React, { useState, useEffect } from "react";
import FooterContact from "./FooterComponents/footerContact";
import FooterLinks from "./FooterComponents/footerLinks";
import FooterSocial from "./FooterComponents/footerSocial";
import Catagory from "./FooterComponents/catagory";

const Footer = () => {
    const [showLink, setShowLink] = useState(true);
    const [showCatagory, setShowCatagory] = useState(true);
    const deviceWidth = window.innerWidth;

    const linkDropdown = () => {
        setShowLink(!showLink);
        console.log("showLink");
    };
    const catagoryDropdown = () => {
        setShowCatagory(!showCatagory);
        console.log("catagory");
    };
    useEffect(() => {
        if (deviceWidth < 976) {
            setShowLink(false);
            setShowCatagory(false);
        }
    }, [deviceWidth]);
    return (
        <div className="footer">
            <div className="footer-main">
                <FooterSocial />
                <FooterLinks click={linkDropdown} showlink={showLink} />
                <Catagory
                    clickCatagory={catagoryDropdown}
                    showcatagory={showCatagory}
                />
                <FooterContact />
            </div>
        </div>
    );
};

export default Footer;
