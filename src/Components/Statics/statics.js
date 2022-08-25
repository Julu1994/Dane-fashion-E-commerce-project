import "./statics.scss";
import React from "react";
import { GoCreditCard } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSettingsBackupRestore } from "react-icons/md";

const Statics = () => {
    return (
        <div className="statics">
            <div className="statics-payment">
                <div className="statics-pIcon">
                    <GoCreditCard size={55} />
                </div>
                <div className="statics-pInfo">
                    <h4 className="statics-pHeader">PAYMENT METHODS</h4>
                    <p className="statics-pTitle">
                        Choose from different payment methods
                    </p>
                </div>
            </div>
            <div className="statics-delivery">
                <div className="statics-dIcon">
                    <TbTruckDelivery size={55} />
                </div>
                <div className="statics-dInfo">
                    <h4 className="statics-dHeader">DELIVERY</h4>
                    <p className="statics-dTitle">
                        Standard delivery from 3 to 5 working days
                    </p>
                </div>
            </div>
            <div className="statics-return">
                <div className="statics-rIcon">
                    <MdSettingsBackupRestore size={55} />
                </div>
                <div className="statics-rInfo">
                    <h4 className="statics-rHeader">RETURN</h4>
                    <p className="statics-rTitle">
                        14 days return or refund right on any item
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Statics;
