import React from "react";
import Products from "../../Components/Products/products";
import SectionHeader from "../../Components/SectionHeader/sectionHeader";
import "./shop.scss";

const Shop = () => {
    return (
        <div className="shop">
            <SectionHeader
                header={"Trending Now"}
                title={"Discover all the trendy styles"}
            />
            <Products catagory={"popular"} />
            <SectionHeader
                header={"Most Viewed"}
                title={"Discover all the trendy styles"}
            />
            <Products catagory={"regular"} />
            <SectionHeader
                header={"Exclusive Collections"}
                title={"Discover all the trendy styles"}
            />
            <Products catagory={"expensive"} />
            <SectionHeader
                header={"New Arrivals"}
                title={"Discover all the trendy styles"}
            />
            <Products catagory={"new arrivals"} />
        </div>
    );
};

export default Shop;
