import "./cart.scss";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../Components/Cart/cartItem";

const Cart = () => {
    const cartProduct = useSelector((state) => state.cartItem);
    console.log(cartProduct, "this is cart product... ");
    return (
        <div className="cart">
            {cartProduct.items?.map((i) => {
                return (
                    <CartItem
                        key={i.items.id}
                        name={i.items.name}
                        img={i.items.img}
                        totalItemQuantity={i.items.totalItemQuantity}
                        totalItemPrice={i.items.totalItemPrice}
                    />
                );
            })}
        </div>
    );
};

export default Cart;
