import React from "react";
import Banner from "../../Components/Banner/banner";
import Products from "../../Components/Products/products";
import SectionHeader from "../../Components/SectionHeader/sectionHeader";
import Trendy from "../../Components/TrendyComponents/trendy";
import "./home.scss";

const Home = () => {
    return (
        <div>
            <Banner />
            <SectionHeader
                header={"Popular Now"}
                title={"They're taking the world by storm!"}
            />
            <Products catagory={"regular"} />
            <SectionHeader
                header={"Trending Now"}
                title={"Discover all the trendy styles"}
            />
            <Trendy />
            <SectionHeader
                header={"New Arrivals"}
                title={"Find your look with soft athleisure!"}
            />
            <Products catagory={"popular"} />
        </div>
    );
};

export default Home;
