import React from "react";
import FooterLinks from "./FooterComponents/footerLinks";
import FooterSocial from "./FooterComponents/footerSocial";

const Footer = () => {
    return (
        <div>
            <FooterSocial />
            <FooterLinks
                first={"Useful Links"}
                second={"About Us"}
                third={"Location"}
                fourth={"Partners"}
                fifth={"FAQ"}
                sixth={"Contact"}
            />
            <FooterLinks
                first={"Catagory"}
                second={"Men"}
                third={"Woman"}
                fourth={"Kids"}
                fifth={"New Arrivals"}
                sixth={"Popular Now"}
            />
        </div>
    );
};

export default Footer;
