import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../Redux/Features/orderSlice";
import { stepActions } from "../../Redux/Features/stepSlice";
import Input from "../GlobalComponents/input";

const DeliveryInfo = () => {
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [postCode, setPostCode] = React.useState(0);
    const email = useSelector((state) => state.user.userInfo.email);
    const cartItem = useSelector((state) => state.cartItem);

    const addressHandler = (event) => setAddress(event.target.value);
    const cityHandler = (event) => setCity(event.target.value);
    const postcodeHandler = (event) => setPostCode(event.target.value);

    const dispatch = useDispatch();
    const nextHandler = (e) => {
        e.preventDefault();
        dispatch(stepActions.increaseStep());
        dispatch(
            orderActions.setOrder({
                address,
                city,
                postCode,
                email,
                cartItem,
            })
        );
    };
    const order = useSelector((state) => state.orderInfo.order);
    console.log(order, "oder slice..");

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
                <Box sx={{ textAlign: "center" }}>
                    <Button type="submit">Next</Button>
                </Box>
            </form>
        </div>
    );
};

export default DeliveryInfo;
