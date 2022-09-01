import React, { useEffect } from "react";
import "./orderManagement.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOrderData } from "../../../Redux/actionCreator2";
const OrderManagement = () => {
    const order = useSelector((state) => state.orderHistory.order);
    const dispatch = useDispatch();
    console.log(order, "from order management");

    useEffect(() => {
        dispatch(getOrderData());
    }, [dispatch]);

    return (
        <div className="orders">
            <h2>Orders</h2>
            {order.map((item) => {
                return (
                    <div className="orders-item" key={item.id}>
                        <h5>Email: {item.order.email}</h5>
                        <h5>Address: {item.order.address}</h5>
                        <h5>Post code: {item.order.postCode}</h5>
                        <h5>City: {item.order.city}</h5>
                        <h3>--Products--</h3>
                        {item.order.cartItem.items.map((i) => {
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
        </div>
    );
};

export default OrderManagement;
