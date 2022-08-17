import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Redux/actionCreators";
import "./popularProducts.scss";
import ProductCard from "./productCard/productCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

function PopularProducts() {
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.item);
    const popularProducts = productsData.filter(
        (item) => item.catagory === "regular"
    );

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);

    return (
        <div className="popular">
            <Swiper
                FreeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                slidesPerView={5}
                spaceBetween={10}
                breakpoints={{
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 0.2,
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 0.2,
                    },
                    750: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}>
                {popularProducts.map((item) => {
                    return (
                        <SwiperSlide className="swiper-box">
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
