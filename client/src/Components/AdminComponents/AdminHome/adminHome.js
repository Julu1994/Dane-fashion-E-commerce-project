import "./adminHome.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderData } from "../../../Redux/actionCreator2";

const AdminHome = () => {
    const orders = useSelector((state) => state.orderHistory.orders);
    const earnings = orders.map((i) => i.order.cartItem.totalAmount);
    const totalEarnig = earnings.reduce(
        (previous, current) => previous + current
    );
    const soldItems = orders.map((i) => i.order.cartItem.totalQuantity);
    const totalSoldItems = soldItems.reduce(
        (previous, current) => previous + current
    );
    const totalOrders = earnings.length;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderData());
    }, [dispatch]);
    return (
        <div className="adminHome">
            <h2 className="adminHome-earning">
                Total Earnings: {totalEarnig}.00$
            </h2>
            <h2 className="adminHome-orders">
                Total Number of Orders: {totalOrders}
            </h2>
            <h2 className="adminHome-items">
                Total Products Sold: {totalSoldItems}
            </h2>
        </div>
    );
};

export default AdminHome;
