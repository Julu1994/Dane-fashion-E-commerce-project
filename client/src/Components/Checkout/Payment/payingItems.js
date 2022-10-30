import React from "react";

const PayingItems = () => {
    const PayingProducts = useSelector((state) => state.cartItem);
    return <div>PayingItems</div>;
};

export default PayingItems;
