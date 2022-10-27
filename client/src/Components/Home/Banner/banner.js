import React from "react";
import "./banner.scss";
import theImage from "../../../Resources/model4.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1 className="banner-content-main">Fashion</h1>
                <h6 className="banner-content-title">
                    LIFE'S TOO SHORT TO WEAR BORING CLOTHES
                </h6>
                <button className="banner-content-btn">
                    <Link
                        to="/shop"
                        style={{ textDecoration: "none", color: "white" }}>
                        Explore
                    </Link>
                </button>
            </div>
            <div className="banner-right">
                <img src={theImage} alt="Banner pic" className="banner-img" />
            </div>
        </div>
    );
};

export default Banner;
