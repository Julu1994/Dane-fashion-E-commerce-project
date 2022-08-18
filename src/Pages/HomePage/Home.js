import React from "react";
import Banner from "../../Components/Banner/banner";
import PopularProducts from "../../Components/Products/popularProducts";
import Trendy from "../../Components/TrendyComponents/trendy";
import "./home.scss";

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularProducts />
            <Trendy />
        </div>
    );
};

export default Home;
