import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../../Components/AdminComponents/AdminHome/adminHome";
import AdminNav from "../../Components/AdminComponents/AdminNav/adminNav";
import OrderManagement from "../../Components/AdminComponents/OrderManagemet/orderManagement";
import PostProducts from "../../Components/AdminComponents/PostPorducts/postProducts";
import ViewProducts from "../../Components/AdminComponents/ViewProducts/viewProducts";

const Admin = () => {
    return (
        <div>
            <div>
                <AdminNav />
            </div>
            <div>
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
