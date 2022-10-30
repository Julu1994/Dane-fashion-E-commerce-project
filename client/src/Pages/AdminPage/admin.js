import React from "react";
import "./admin.scss";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../../Components/Admin/AdminHome/adminHome";
import AdminNav from "../../Components/Admin/AdminNav/adminNav";
import OrderManagement from "../../Components/Admin/OrderManagemet/orderManagement";
import PostProducts from "../../Components/Admin/PostPorducts/postProducts";
import ViewProducts from "../../Components/Admin/ViewProducts/viewProducts";

const Admin = () => {
    return (
        <div className="admin">
            <div>
                <AdminNav />
            </div>
            <div className="admin-pages">
                <Routes>
                    <Route path="home" element={<AdminHome />} />
                    <Route
                        path="order-management"
                        element={<OrderManagement />}
                    />
                    <Route path="post-products" element={<PostProducts />} />
                    <Route path="view-products" element={<ViewProducts />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
