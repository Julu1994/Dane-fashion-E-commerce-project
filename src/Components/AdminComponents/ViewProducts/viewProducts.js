import React, { useEffect } from "react";
import "./viewProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../../Redux/actionCreators";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { database, storage } from "../../../Firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

const ViewProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.item);

    useEffect(() => {
        dispatch(getProductsData());
    }, []);

    const deleteHandler = async (id, url) => {
        try {
            await deleteDoc(doc(database, "shopProducts", id));
            const reference = ref(storage, url);
            await deleteObject(reference);
            toast("The product has been deleted");
        } catch (error) {
            toast(error.message);
        }
    };

    return (
        <div className="view">
            <table className="view-table">
                <tbody>
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
                            <tr className="view-row" key={item.id}>
                                <td> {index + 1}</td>
                                <td>
                                    <img
                                        className="view-img"
                                        src={item.imgUrl}
                                        alt="productimg"
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.catagory}</td>
                                <td>{item.type}</td>
                                <td>{item.price}</td>
                                <td>
                                    <MdOutlineDelete
                                        size={25}
                                        onClick={() => {
                                            deleteHandler(item.id, item.url);
                                        }}
                                    />
                                </td>
                                <td>
                                    <MdOutlineModeEditOutline size={25} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ViewProducts;
