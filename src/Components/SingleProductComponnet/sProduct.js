import "./sProduct.scss";
import React from "react";
import ProductRating from "../Products/rating";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/Features/cartSlice";

const Sproduct = (props) => {
    const { header, price, productImg, description, productObj } = props;
    const dispatch = useDispatch();
    const AddingToBag = () => {
        dispatch(cartActions.addTocart(productObj));
    };

    return (
        <div className="single-p">
            <div className="single-p-left">
                <img
                    className="single-p-img"
                    src={productImg}
                    alt="the product"
                />
            </div>
            <div className="single-p-right">
                <h1 className="single-p-name">{header}</h1>
                <p className="single-p-price">${price}.00</p>
                <ProductRating />
                <Button
                    className="single-p-cart"
                    sx={{ minWidth: "70%", marginTop: "2rem" }}
                    variant="contained"
                    color="error"
                    onClick={AddingToBag}>
                    Add to bag
                </Button>
                <h5 className="single-p-descp">Description</h5>
                <p className="single-p-descp-info">{description}</p>
            </div>
        </div>
    );
};

export default Sproduct;
