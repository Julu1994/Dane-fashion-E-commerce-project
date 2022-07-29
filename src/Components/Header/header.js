import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav">
            <div className="nav-main">Dane Fashion</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/lifestyle">Lifestyle</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <li>Search</li>
                <li>Avater</li>
                <li>Cart</li>
            </div>
        </div>
    );
};

export default Header;
