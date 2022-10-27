import React from "react";
import "./allProducts.scss";
import ProductCard from "./productCard/productCard";

function AllProducts({ products }) {
    return (
        <div className="products">
            {products.map((item) => {
                return (
                    <div key={item.id} className="product-main">
                        <ProductCard
                            productObj={item}
                            productName={item.name}
                            productImg={item.imgUrl}
                            price={item.price}
                            id={item.id}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default AllProducts;
