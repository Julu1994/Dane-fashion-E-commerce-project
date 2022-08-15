import React from "react";
import Banner from "../../Components/Banner/banner";
import ProductCard from "../../Components/Products/productCard";

import "./home.scss";

function Home() {
    return (
        <div>
            <Banner />
            <ProductCard />
            <div className="imgmodel">Home</div>
        </div>
    );
}

export default Home;
