import React from "react";
import "./banner.scss";
import theImage from "../../Resources/model4.png";

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
            <div className="banner-right">
                <img
                    src={theImage}
                    alt="Banner pic"
                    className="banner-right-img"
                />
            </div>
        </div>
    );
};

export default Banner;
