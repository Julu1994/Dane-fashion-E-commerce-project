import "./footer.scss";
import React, { useState } from "react";
import FooterContact from "./FooterComponents/footerContact";
import FooterLinks from "./FooterComponents/footerLinks";
import FooterSocial from "./FooterComponents/footerSocial";

const Footer = () => {
    const [showLink, setShowLink] = useState(false);
    const [showCatagory, setShowCatagory] = useState(false);

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
                <FooterLinks
                    first={"Useful Links"}
                    second={"About Us"}
                    third={"Location"}
                    fourth={"Partners"}
                    fifth={"FAQ"}
                    sixth={"Contact"}
                    click={linkDropdown}
                />
                <FooterLinks
                    first={"Catagory"}
                    second={"Men"}
                    third={"Woman"}
                    fourth={"Kids"}
                    fifth={"New Arrivals"}
                    sixth={"Popular Now"}
                    click={catagoryDropdown}
                />
                <FooterContact />
            </div>
        </div>
    );
};

export default Footer;
