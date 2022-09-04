import "./singleProduct.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Products from "../../Components/Products/products";
import SectionHeader from "../../Components/SectionHeader/sectionHeader";
import Sproduct from "../../Components/SingleProductComponnet/sProduct";
import { getProductsData } from "../../Redux/actionCreators";

const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productsData = useSelector((state) => state.products.item);
    const displayProducts = productsData.filter((item) => item.id === id);
    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);

    return (
        <div>
            {displayProducts.map((item) => {
                return (
                    <Sproduct
                        key={item.id}
                        header={item.name}
                        price={item.price}
                        productImg={item.imgUrl}
                        description={item.description}
                        productObj={item}
                    />
                );
            })}
            <div className="related-item">
                <SectionHeader
                    header={"You may also like these"}
                    title={"Find your look with soft athleisure!"}
                />
                <Products catagory={"popular"} />
            </div>
        </div>
    );
};

export default SingleProduct;
