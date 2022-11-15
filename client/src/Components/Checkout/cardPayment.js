import React from "react";
import Payment from "./SubComponent/payment";
import "./cardPayment.scss";
import { useSelector } from "react-redux";

function CardPayment() {
    const itemInfo = useSelector((state) => state.cartItem);

    return (
        <div className="card">
            <div className="card-summery">
                {itemInfo.items?.map((i) => {
                    return (
                        <div className="card-summery-item">
                            <h4>{i.name}</h4>
                            <h5>
                                {i.price}.00$ X {i.totalItemQuantity} ={" "}
                                {i.totalItemPrice}.00$
                            </h5>
                        </div>
                    );
                })}
                <h3>Total : {itemInfo.totalAmount}.00$</h3>
            </div>
            <Payment />
        </div>
    );
}

export default CardPayment;
