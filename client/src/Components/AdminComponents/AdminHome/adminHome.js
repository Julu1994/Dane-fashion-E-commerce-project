import "./adminHome.scss";
import React from "react";
import { useSelector } from "react-redux";

const AdminHome = () => {
    //const orders = useSelector((state) => state.orderHistory.order);
    //const earnings = orders.cartItem.map((i) => i.totalAmount);
    //console.log(orders, "latest ");
    return (
        <div className="adminHome">
            <div className="adminHom-child">
                <h1>Total Earnings: </h1>
            </div>
        </div>
    );
};

export default AdminHome;
