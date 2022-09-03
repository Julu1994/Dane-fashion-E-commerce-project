import "./order.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderData } from "../../Redux/actionCreator2";

const Order = () => {
    const orders = useSelector((state) => state.orderHistory.orders);
    const userEmail = useSelector((state) => state.user.userInfo.email);
    const userOrder = orders.filter((item) => item.order.email === userEmail);
    console.log(userOrder, "userOrder");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderData());
    }, [dispatch]);

    return (
        <div className="order">
            <h2 className="order-header">Order History</h2>
            {userOrder?.map((item) => {
                return (
                    <div className="order-item" key={item.id}>
                        <h5>Email: {item.order.email}</h5>
                        <h5>Address: {item.order.address}</h5>
                        <h5>Post code: {item.order.postCode}</h5>
                        <h5>City: {item.order.city}</h5>
                        <h3>--Products--</h3>
                        {item.order.cartItem.items?.map((i) => {
                            return (
                                <div key={i.id}>
                                    <h5>Product name: {i.name}</h5>
                                    <h5>Product ID: {i.id}</h5>
                                    <h5>
                                        Product quantity: {i.totalItemQuantity}
                                    </h5>
                                    <h5>Products price: {i.totalItemPrice}</h5>
                                    <div>-----------------------------</div>
                                </div>
                            );
                        })}
                        <h4>
                            Total Price: {item.order.cartItem.totalAmount}.00$
                        </h4>
                    </div>
                );
            })}
            {userOrder.length === 0 && (
                <h3 className="order-empty">No orders to display!! </h3>
            )}
        </div>
    );
};

export default Order;
