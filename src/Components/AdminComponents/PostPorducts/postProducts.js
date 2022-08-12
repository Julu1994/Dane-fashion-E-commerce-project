import "./postProducts.scss";
import React, { useState } from "react";
import Input from "../../GlobalComponents/input";
import Select from "../../GlobalComponents/select";
import Button from "../../GlobalComponents/button";

const PostProducts = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setCatagory] = useState("");
    console.log(catagory);
    const [description, setDescription] = useState("");

    const [product, setProduct] = useState({
        name: "",
        id: "",
        imgUrl: "",
        price: null,
        id: "",
        catagory: "",
        description: "",
    });
    const productObjMaker = (event) => {
        event.preventDefault();
        setProduct({
            name,
            id,
            imgUrl,
            price,
            catagory,
            description,
        });
    };
    console.log(product);
    const nameHandler = (event) => setName(event.target.value);
    const imgUrlHandler = (event) => setImgUrl(event.target.value);
    const priceHandler = (event) => setPrice(event.target.value);
    const idHandler = (event) => setId(event.target.value);
    const catagoryHandler = (event) => setCatagory(event.target.value);
    const descriptionHandler = (event) => setDescription(event.target.value);

    const options = [
        "----SELECT THE PRODUCT CATAGORY----",
        "popular",
        "new arrivals",
        "regular",
        "expensive",
        "offer",
    ];

    return (
        <div className="post">
            <form onSubmit={productObjMaker}>
                <Input
                    type={"text"}
                    text={"Product Name"}
                    onchange={nameHandler}
                />
                <Input
                    type={"text"}
                    text={"Product Price"}
                    onchange={priceHandler}
                />
                <Input type={"file"} />
                <Input
                    type={"text"}
                    text={"Image URL"}
                    onchange={imgUrlHandler}
                />
                <Select
                    options={options}
                    selectName={"ProductCaragory"}
                    onchange={catagoryHandler}
                />
                <Input
                    type={"text"}
                    text={" Product ID"}
                    onchange={idHandler}
                />
                <Input
                    type={"text"}
                    text={" Product Description"}
                    onchange={descriptionHandler}
                />
                <Button color={"bg-pink"} type={"submit"} text={"SUBMIT"} />
            </form>
        </div>
    );
};

export default PostProducts;
