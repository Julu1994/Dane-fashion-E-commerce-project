import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">Dane Fashion</div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/">
                            Home
                        </Link>
                        <div className="header-nav-span"></div>
                    </li>
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/shop">
                            Shop
                        </Link>
                        <div className="header-nav-span"></div>
                    </li>
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/lifestyle">
                            Lifestyle
                        </Link>
                        <div className="header-nav-span"></div>
                    </li>
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/support">
                            Support
                        </Link>
                        <div className="header-nav-span"></div>
                    </li>
                </ul>
            </nav>
            <div className="header-element">
                <li className="header-element-search">Search</li>
                <li className="header-element-login">Login</li>
                <li className="header-element-cart">Cart</li>
            </div>
        </div>
    );
};

export default Header;
