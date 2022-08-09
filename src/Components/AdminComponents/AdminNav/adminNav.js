import "./adminNav.scss";
import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
    return (
        <div className="adminNav">
            <ul className="adminNav-list">
                <li className="adminNav-item">
                    <Link className="adminNav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="adminNav-item">
                    <Link className="adminNav-link" to="/">
                        View Porducts
                    </Link>
                </li>
                <li className="adminNav-item">
                    <Link className="adminNav-link" to="/">
                        Post Products
                    </Link>
                </li>
                <li className="adminNav-item">
                    <Link className="adminNav-link" to="/">
                        Manage Orders
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNav;
