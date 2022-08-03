import React from "react";
import FooterCatagory from "./FooterComponents/footerCatagory";
import FooterLinks from "./FooterComponents/footerLinks";
import FooterSocial from "./FooterComponents/footerSocial";

const Footer = () => {
    return (
        <div>
            <FooterSocial />
            <FooterLinks />
            <FooterCatagory />
        </div>
    );
};

export default Footer;
