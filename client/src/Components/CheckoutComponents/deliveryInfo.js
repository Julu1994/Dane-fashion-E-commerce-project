import React from "react";
import Input from "../GlobalComponents/input";

const DeliveryInfo = ({ props }) => {
    return (
        <div>
            <form onSubmit={props}>
                <Input text={"Address"} type={"text"} />
                <Input text={"City"} type={"text"} />
                <Input text={"Postcode"} type={"text"} />
            </form>
        </div>
    );
};

export default DeliveryInfo;
