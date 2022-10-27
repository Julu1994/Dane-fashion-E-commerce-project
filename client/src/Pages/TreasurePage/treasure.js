import "./treasure.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllProducts from "../../GlobalComponents/Products/allProducts";
import { getProductsData } from "../../Redux/actionCreators";

const Treasure = () => {
    const [allBg, setAllBg] = useState("");
    const [accBg, setAccBg] = useState("");
    const [cltBg, setCltBg] = useState("");
    const [jwBg, setJwBg] = useState("");
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.item);
    const [products, setProducts] = useState(productsData);
    const accessories = productsData.filter(
        (item) => item.type === "accessories"
    );
    const clothShoes = productsData.filter(
        (item) => item.type === "cloths and shoes"
    );
    const jewellery = productsData.filter((item) => item.type === "jewelries");

    const HandleAll = () => {
        setAllBg("bg");
        setAccBg("");
        setCltBg("");
        setJwBg("");
        setProducts(productsData);
    };
    const HandleAccessories = () => {
        setAllBg("");
        setAccBg("bg");
        setCltBg("");
        setJwBg("");
        setProducts(accessories);
    };
    const HandleCloths = () => {
        setAllBg("");
        setAccBg("");
        setCltBg("bg");
        setJwBg("");
        setProducts(clothShoes);
    };
    const HandleJewellery = () => {
        setAllBg("");
        setAccBg("");
        setCltBg("");
        setJwBg("bg");
        setProducts(jewellery);
    };

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);

    return (
        <div className="treasure">
            <div className="treasure-header">
                <div className={`treasure-all ${allBg}`} onClick={HandleAll}>
                    All
                </div>
                <div
                    className={`treasure-acc ${accBg}`}
                    onClick={HandleAccessories}>
                    Accessories
                </div>
                <div className={`treasure-clt ${cltBg}`} onClick={HandleCloths}>
                    Cloths-Shoes
                </div>
                <div
                    className={`treasure-jw ${jwBg}`}
                    onClick={HandleJewellery}>
                    Jewellery
                </div>
            </div>
            <AllProducts products={products} />
        </div>
    );
};

export default Treasure;
