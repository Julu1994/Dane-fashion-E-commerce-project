import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Redux/actionCreators";
import "./popularProducts.scss";
import ProductCard from "./productCard/productCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

function Products({ catagory }) {
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.item);
    const popularProducts = productsData.filter(
        (item) => item.catagory === catagory
    );

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);

    return (
        <div className="popular">
            <Swiper
                className="mySwiper"
                slidesPerView={6}
                spaceBetween={10}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    736: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1264: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1524: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                }}>
                {popularProducts.map((item) => {
                    return (
                        <SwiperSlide className="swiper-box" key={item.id}>
                            <ProductCard
                                productObj={item}
                                productName={item.name}
                                productImg={item.imgUrl}
                                price={item.price}
                                id={item.id}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Products;
