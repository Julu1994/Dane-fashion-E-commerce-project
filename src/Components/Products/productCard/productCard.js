import * as React from "react";
import "./productCard.scss";

export default function ProductCard(props) {
    // const { productName, productImg, price } = props;
    return (
        <div className="card">
            <div className="card-outer">
                <div className="card-inner">
                    {/* <img
                        className="card-productimage"
                        src={productImg}
                        alt="product"
                    /> */}
                </div>
                {/* <h3>{productName}</h3>
                <h4>{price}</h4> */}
            </div>
        </div>
    );
}
