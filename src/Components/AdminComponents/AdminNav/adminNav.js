import "./adminNav.scss";
import React from "react";
import { Link } from "react-router-dom";
import { IoHome, IoLogoCodepen } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const AdminNav = () => {
    return (
        <div className="adminNav">
            <ul className="adminNav-list">
                <li className="adminNav-item">
                    <Link className="adminNav-link" to="/admin/home">
                        <IoHome className="adminNav-icon" size={25} />
                        Home
                    </Link>
                </li>
                <li className="adminNav-item">
                    <Link className="adminNav-link" to="/admin/view-products">
                        <BsMinecart className="adminNav-icon" size={25} />
                        View Porducts
                    </Link>
                </li>
                <li className="adminNav-item">
                    <Link className="adminNav-link" to="/admin/post-products">
                        <IoLogoCodepen className="adminNav-icon" size={25} />
                        Post Products
                    </Link>
                </li>
                <li className="adminNav-item">
                    <Link
                        className="adminNav-link"
                        to="/admin/order-management">
                        <MdManageAccounts className="adminNav-icon" size={25} />
                        Manage Orders
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNav;
