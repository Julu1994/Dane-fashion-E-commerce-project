import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Redux/actionCreators";
import "./popularProducts.scss";
import ProductCard from "./productCard/productCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function PopularProducts() {
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.item);
    const popularProducts = productsData.filter(
        (item) => item.catagory === "popular"
    );

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);

    return (
        <div className="popular">
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={30}>
                {popularProducts.map((item) => {
                    return (
                        <SwiperSlide>
                            <ProductCard
                                productName={item.name}
                                productImg={item.imgUrl}
                                price={item.price}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default PopularProducts;
