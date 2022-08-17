import React from "react";
import Banner from "../../Components/Banner/banner";
import PopularProducts from "../../Components/Products/popularProducts";
import "./home.scss";

function Home() {
    return (
        <div>
            <Banner />
            <PopularProducts />
        </div>
    );
}

export default Home;
