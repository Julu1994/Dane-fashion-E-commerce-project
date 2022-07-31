import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                Dane<span className="header-logo-dot">.</span>Fashion
            </div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/lifestyle">
                            Lifestyle
                        </Link>
                    </li>
                    <li className="header-nav-item">
                        <Link className="header-nav-link" to="/support">
                            Support
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="header-element">
                <li className="header-element-search">
                    <BiSearch />
                </li>
                <li className="header-element-login">
                    <AiOutlineUser />
                </li>
                <li className="header-element-cart">
                    <IoBagHandleOutline />
                </li>
            </div>
        </div>
    );
};

export default Header;
