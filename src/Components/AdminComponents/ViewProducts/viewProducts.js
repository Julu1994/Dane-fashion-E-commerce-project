import React, { useEffect } from "react";
import "./viewProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../../Redux/actionCreators";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";

const ViewProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.item);

    useEffect(() => {
        dispatch(getProductsData());
    }, []);

    return (
        <div className="view">
            <table className="view-table">
                <tr className="view-main">
                    <th>No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Catagory</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                </tr>
                {products.map((item, index) => {
                    return (
                        <tr className="view-row">
                            <th> {index + 1}</th>
                            <th>
                                <img
                                    className="view-img"
                                    src={item.imgUrl}
                                    alt="productimg"
                                />
                            </th>
                            <th>{item.name}</th>
                            <th>{item.catagory}</th>
                            <th>{item.type}</th>
                            <th>{item.price}</th>
                            <th>
                                <MdOutlineDelete size={25} />
                            </th>
                            <th>
                                <MdOutlineModeEditOutline size={25} />
                            </th>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default ViewProducts;
