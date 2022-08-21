import "./cartItem.scss";
import React from "react";

const CartItem = (props) => {
    const { name, id, img, totalItemQuantity, totalItemPrice } = props;
    return (
        <div className="cart">
            <div className="item" key={id}>
                <img className="item-pic" src={img} alt="product" />
                <h3 className="item-name">{name}</h3>
                <p>{totalItemPrice}$</p>
                <p>Quantity: {totalItemQuantity}</p>
                <h2>Total</h2>
            </div>
        </div>
    );
};

export default CartItem;
