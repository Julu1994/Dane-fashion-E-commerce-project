import "./footerContact.scss";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import visa from "../../../Resources/vi.png";
import paypal from "../../../Resources/mc.png";
import master from "../../../Resources/pp.png";

const FooterContact = () => {
    return (
        <div className="contact">
            <h3 className="contact-header">Contact Info</h3>

            <ul className="contact-list">
                <li className="contact-item">
                    <HiOutlineLocationMarker
                        className="contact-icon"
                        size={20}
                    />
                    Kongens nytorv, Copenhagen, Denmark
                </li>

                <li className="contact-item">
                    <HiOutlineMail className="contact-icon" size={20} />
                    info@danefashion.dk
                </li>

                <li className="contact-item">
                    <BsTelephone className="contact-icon" size={20} />
                    +4500123456
                </li>
            </ul>
            <h4 className="contact-payment"> WE ACCEPT</h4>
            <img src={visa} alt="visa Card" className="contact-pay" />
            <img src={paypal} alt="Paypal" className="contact-pay" />
            <img src={master} alt="Master Card" className="contact-pay" />
        </div>
    );
};

export default FooterContact;
