import "./footerCatagory.scss";
import React from "react";
import { Link } from "react-router-dom";

const FooterCatagory = () => {
    return (
        <div>
            <h3>Catagory</h3>
            <ul>
                <li>
                    <Link to="/shop">Man </Link>
                </li>
                <li>
                    <Link to="/shop">Woman</Link>
                </li>
                <li>
                    <Link to="/shop">Kids</Link>
                </li>
                <li>
                    <Link to="/shop">New Arrivals</Link>
                </li>
                <li>
                    <Link to="/shop">Popular</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterCatagory;
