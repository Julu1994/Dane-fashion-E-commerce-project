import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../Components/Banner/banner";
import ProductCard from "../../Components/Products/productCard";
import { getProductsData } from "../../Redux/actionCreators";

import "./home.scss";

function Home() {
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.item);
    const popularProducts = productsData.filter(
        (item) => item.catagory === "popular"
    );

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);
    return (
        <div>
            <Banner />
            <div className="home-popularProducts">
                {popularProducts.map((item) => {
                    return (
                        <ProductCard
                            productName={item.name}
                            productImg={item.imgUrl}
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
