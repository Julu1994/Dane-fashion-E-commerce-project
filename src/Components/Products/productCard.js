import "./productCard.scss";
import React from "react";

const ProductCard = (props) => {
    const { productName, productImg, price } = props;
    return (
        <div className="card">
            <div className="card-inner">
                <img
                    className="card-productimage"
                    src={productImg}
                    alt="product"
                />
            </div>

            <h4 className="card-header">{productName}</h4>
            <button className="card-btn"> {price} </button>
        </div>
    );
};

export default ProductCard;
