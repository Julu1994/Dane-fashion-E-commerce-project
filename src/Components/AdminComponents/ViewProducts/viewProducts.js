import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { database } from "../../../Firebase/config";
import "./viewProducts.scss";

const ViewProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    console.log(products[2]?.name);
    useEffect(() => {
        getProdductsData();
    }, []);
    const getProdductsData = () => {
        try {
            const productsRef = collection(database, "shopProducts");

            const q = query(productsRef, orderBy("name", "desc"));

            onSnapshot(q, (querySnapshot) => {
                const productsList = querySnapshot.docs.map((item) => ({
                    id: item.id,
                    ...item.data(),
                }));
                setProducts(productsList);
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
    return <div className="view"> ViewProducts</div>;
};

export default ViewProducts;
