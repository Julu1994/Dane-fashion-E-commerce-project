import "./cart.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Components/Cart/cartItem";
import Button from "@mui/material/Button";
import { cartActions } from "../../Redux/Features/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartProduct = useSelector((state) => state.cartItem);
    const dispatch = useDispatch();

    const cartEmpty = () => {
        dispatch(cartActions.emptyTheCart());
    };
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
                        id={i.id}
                    />
                );
            })}
            {cartProduct.items.length > 0 ? (
                <>
                    <h3>Total</h3>
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
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
                    </Link>
                    <Button
                        onClick={cartEmpty}
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
                </>
            ) : (
                <>
                    <h3 className="cart-empty">Your cart is empty</h3>
                </>
            )}
        </div>
    );
};

export default Cart;
