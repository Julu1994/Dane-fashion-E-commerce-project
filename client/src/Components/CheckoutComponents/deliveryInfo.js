import React from "react";
import { useDispatch } from "react-redux";
import { stepActions } from "../../Redux/Features/stepSlice";
import Input from "../GlobalComponents/input";

const DeliveryInfo = () => {
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [postCode, setPostCode] = React.useState(0);

    const addressHandler = (event) => setAddress(event.target.value);
    const cityHandler = (event) => setCity(event.target.value);
    const postcodeHandler = (event) => setPostCode(event.target.value);

    const dispatch = useDispatch();
    const nextHandler = (e) => {
        e.preventDefault();
        dispatch(stepActions.increaseStep());
    };

    return (
        <div>
            <form onSubmit={nextHandler}>
                <Input
                    text={"Address"}
                    type={"text"}
                    onchange={addressHandler}
                />
                <Input text={"City"} type={"text"} onchange={cityHandler} />
                <Input
                    text={"Postcode"}
                    type={"text"}
                    onchange={postcodeHandler}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    );
};

export default DeliveryInfo;
