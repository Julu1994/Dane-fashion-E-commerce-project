import "./confirmOrder.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stepActions } from "../../Redux/Features/stepSlice";
import { Button } from "@mui/material";

const ConfirmOrder = () => {
    const dispatch = useDispatch();
    const nextHandler = () => {
        dispatch(stepActions.increaseStep());
    };
    const product = useSelector((state) => state.orderInfo.order.cartItem);
    const address = useSelector((state) => state.orderInfo.order.address);
    const city = useSelector((state) => state.orderInfo.order.city);
    const postcode = useSelector((state) => state.orderInfo.order.postCode);
    return (
        <div className="confirm">
            <h3 className="confirm-item">Confirm the order</h3>
            <h5 className="confirm-item">
                Number of item: {product.totalQuantity}
            </h5>
            <h5 className="confirm-item">
                Price in total : {product.totalAmount}.00$
            </h5>
            <h5 className="confirm-item"> Address: {address}</h5>
            <h5 className="confirm-item"> City: {city}</h5>
            <h5 className="confirm-item"> Post code: {postcode}</h5>
            <Button onClick={nextHandler}>confirm</Button>
        </div>
    );
};

export default ConfirmOrder;
