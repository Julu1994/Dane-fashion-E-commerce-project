import React from "react";
import "./banner.scss";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1 className="banner-content-main">Fashion</h1>
                <h6 className="banner-content-title">
                    LIFE'S TOO SHORT TO WEAR BORING CLOTHES
                </h6>
                <button className="banner-content-btn">Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;
