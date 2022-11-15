import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";
import Loginnav from "./HeaderComponents/loginnav";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Auth/config";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Redux/Features/authSlice";
import { HeaderContent } from "./HeaderComponents/headerContent";
import AdminRoute from "../../Components/Admin/adminRoute";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const dispatcher = useDispatch();
    const toggleClick = () => {
        setToggle(!toggle);
    };
    const profileToggle = useSelector(
        (state) => state.toggle.userProfileToggle
    );

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatcher(
                authAction.auth({
                    name: user.displayName,
                    email: user.email,
                    id: user.uid,
                })
            );
        }
    });
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
                        <Link className="header-nav-link" to="/treasure">
                            Treasure
                        </Link>
                    </li>
                    <li className="header-nav-item">
                        <AdminRoute>
                            <button className="header-nav-btn">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                    to="/admin/home">
                                    Admin
                                </Link>
                            </button>
                        </AdminRoute>
                    </li>
                </ul>
            </nav>
            <HeaderContent />
            {profileToggle && <Loginnav />}
        </div>
    );
};

export default Header;
