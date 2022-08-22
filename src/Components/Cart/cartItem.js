import "./cartItem.scss";
import React from "react";
import CartButton from "./cartButton";

const CartItem = (props) => {
    const { name, img, totalItemQuantity, totalItemPrice } = props;
    return (
        <div className="item-main">
            <div className="item">
                <img className="item-pic" src={img} alt="product" />
                <div className="item-info">
                    <p className="item-name">{name}</p>
                    <p className="item-price">Price: {totalItemPrice}$</p>
                    <p className="item-quantity">
                        Quantity: {totalItemQuantity}
                    </p>
                </div>
                <div className="item-btn">
                    <CartButton />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
