import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../../Redux/actionCreators";

const ViewProducts = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.products.item);

    useEffect(() => {
        dispatch(getProductsData());
    }, []);

    return <div className="view"> ViewProducts</div>;
};

export default ViewProducts;
