import "./footerContact.scss";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import visa from "../../../Resources/vi.png";
import paypal from "../../../Resources/mc.png";
import master from "../../../Resources/pp.png";

const FooterContact = (props) => {
    const { clickcontact, showcontact } = props;
    return (
        <div className="contact">
            <div className="contact-main">
                <h3 className="contact-header">Contact Info</h3>
                <AiOutlinePlus
                    size={20}
                    className="contact-btn"
                    onClick={clickcontact}
                />
            </div>
            {showcontact && (
                <div>
                    <ul className="contact-list">
                        <li className="contact-item">
                            <HiOutlineLocationMarker
                                className="contact-icon"
                                size={25}
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
                    <img
                        src={master}
                        alt="Master Card"
                        className="contact-pay"
                    />
                </div>
            )}
        </div>
    );
};

export default FooterContact;
