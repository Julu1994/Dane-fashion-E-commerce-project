import "./postProducts.scss";
import React, { useState } from "react";
import Input from "../../GlobalComponents/input";

const PostProducts = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setCatagory] = useState("");
    const [description, setDescription] = useState("");

    const [product, setProduct] = useState({
        name: "",
        id: "",
        imgUrl: "",
        price: "",
        id: "",
        catagory: "",
        description: "",
    });
    const b = (event) => {
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

    return (
        <div className="post">
            <form>
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
                <Input
                    type={"text"}
                    text={"Image URL"}
                    onchange={imgUrlHandler}
                />
                <Input
                    type={"text"}
                    text={"Products Catagory"}
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
                <button onClick={b}>Submit</button>
            </form>
        </div>
    );
};

export default PostProducts;
