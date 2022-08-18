import React from "react";
import Banner from "../../Components/Banner/banner";
import PopularProducts from "../../Components/Products/popularProducts";
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
            <PopularProducts />
            <SectionHeader
                header={"Trendy"}
                title={"Discover all the trendy styles"}
            />
            <Trendy />
        </div>
    );
};

export default Home;
