import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";
import Loginnav from "./loginnav";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [navlog, setNavlog] = useState(false);

    const toggleClick = () => {
        setToggle(!toggle);
    };

    const toggleLog = () => {
        setNavlog(!navlog);
    };

    return (
        <div className="header">
            <div className="header-togle">
                <GiHamburgerMenu
                    onClick={toggleClick}
                    className="header-togle-btn"
                />
            </div>
            <Link to="/" className="header-logo">
                Dane<span className="header-logo-dot">.</span>com
            </Link>
            <nav
                className={
                    toggle ? "header-nav show-togle" : "header-nav hide-togle"
                }>
                <ul className="header-nav-list">
                    {toggle && (
                        <TiDelete
                            onClick={toggleClick}
                            className="header-nav-item"
                        />
                    )}

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
                    <BiSearch className="pointer-cursor" />
                </li>
                <li className="header-element-login">
                    <AiOutlineUser
                        onClick={toggleLog}
                        className="pointer-cursor"
                    />
                </li>
                <li className="header-element-cart">
                    <IoBagHandleOutline className="pointer-cursor" />
                    <p className="header-element-badge">5</p>
                </li>
            </div>
            {navlog && <Loginnav />}
        </div>
    );
};

export default Header;
