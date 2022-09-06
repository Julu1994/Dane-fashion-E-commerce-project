import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Redux/actionCreators";
import "./products.scss";
import ProductCard from "./productCard/productCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Products({ catagory }) {
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.item);
    const popularProducts = productsData.filter(
        (item) => item.catagory === catagory
    );

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className="popular">
            <Slider {...settings}>
                {popularProducts.map((item) => {
                    return (
                        <div key={item.id} className="product-card">
                            <ProductCard
                                productObj={item}
                                productName={item.name}
                                productImg={item.imgUrl}
                                price={item.price}
                                id={item.id}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Products;
