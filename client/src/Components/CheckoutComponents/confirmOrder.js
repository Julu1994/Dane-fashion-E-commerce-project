import React from "react";
import { useDispatch } from "react-redux";
import { stepActions } from "../../Redux/Features/stepSlice";

const ConfirmOrder = () => {
    const dispatch = useDispatch();
    const nextHandler = () => {
        dispatch(stepActions.increaseStep());
    };
    return (
        <div>
            ConfirmOrder
            <button onClick={nextHandler}>Next</button>
        </div>
    );
};

export default ConfirmOrder;
