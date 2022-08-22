import "./cart.scss";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../Components/Cart/cartItem";
import Button from "@mui/material/Button";

const Cart = () => {
    const cartProduct = useSelector((state) => state.cartItem);
    console.log(cartProduct, "this is cart product... ");
    return (
        <div className="cart">
            {cartProduct.items?.map((i) => {
                return (
                    <CartItem
                        key={i.id}
                        name={i.name}
                        img={i.img}
                        totalItemQuantity={i.totalItemQuantity}
                        totalItemPrice={i.totalItemPrice}
                    />
                );
            })}
            <h3>Total</h3>
            <Button
                className="cart-checkout"
                variant="contained"
                color="error"
                sx={{
                    minWidth: "90%",
                    marginLeft: "5%",
                    marginBottom: "1rem",
                }}>
                Go to checkout
            </Button>
            <Button
                className="cart-checkout"
                variant="outlined"
                color="error"
                sx={{
                    minWidth: "90%",
                    marginLeft: "5%",
                    marginBottom: "1rem",
                }}>
                Empty the cart
            </Button>
        </div>
    );
};

export default Cart;
