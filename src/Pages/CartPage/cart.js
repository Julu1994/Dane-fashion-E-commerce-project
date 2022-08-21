import "./cart.scss";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartProduct = useSelector((state) => state.cartItem);
    console.log(cartProduct, "this is cart product... ");
    return (
        <div className="cart">
            Cart..
            {cartProduct.items?.map((i) => {
                return (
                    <div className="item" key={i.id}>
                        <img
                            className="item-pic"
                            src={i.imgUrl}
                            alt="product"
                        />
                        <h3 className="item-name">{i.name}</h3>
                        <p>{i.totalItemPrice}</p>
                        <p>Quantity: {i.totalItemQuantity}</p>
                        <h2></h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
