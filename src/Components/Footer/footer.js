import "./footer.scss";
import React from "react";
import FooterContact from "./FooterComponents/footerContact";
import FooterLinks from "./FooterComponents/footerLinks";
import FooterSocial from "./FooterComponents/footerSocial";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main">
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
                <FooterContact />
            </div>
        </div>
    );
};

export default Footer;
