import "./postProducts.scss";
import React, { useState } from "react";
import Input from "../../GlobalComponents/input";
import Select from "../../GlobalComponents/select";
import Button from "../../GlobalComponents/button";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { database, storage } from "../../../Firebase/config";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";

const PostProducts = () => {
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setCatagory] = useState("");
    const [type, setType] = useState("");
    console.log(catagory);
    const [description, setDescription] = useState("");

    const productObjMaker = (event) => {
        event.preventDefault();
        try {
            const docRef = addDoc(collection(database, "shopProducts"), {
                name,
                imgUrl,
                price,
                catagory,
                type,
                quantity,
                description,
            });
            toast.success("product is succesfully added to databae");
        } catch (error) {
            toast.error(error);
        }
    };
    const nameHandler = (event) => setName(event.target.value);
    const priceHandler = (event) => setPrice(parseInt(event.target.value));
    const catagoryHandler = (event) => setCatagory(event.target.value);
    const quantityHandler = (event) => setQuantity(event.target.value);
    const typeHsndler = (event) => setType(event.target.value);
    const descriptionHandler = (event) => setDescription(event.target.value);

    const imgHandler = (event) => {
        const imgFile = event.target.files[0];
        console.log(imgFile);
        const storageRef = ref(storage, `ProductImages/${imgFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imgFile);

        //**********//
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                toast("Image upload is " + progress + "% done");
            },
            (error) => {
                toast.error(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL);
                });
            }
        );
    };

    const options = [
        "--SELECT THE PRODUCT CATAGORY--",
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
                <Input type={"file"} onchange={imgHandler} />
                <Select
                    options={options}
                    selectName={"ProductCaragory"}
                    onchange={catagoryHandler}
                />
                <Input type={"text"} text={"Type"} onchange={typeHsndler} />
                <Input
                    type={"text"}
                    text={"Quantity"}
                    onchange={quantityHandler}
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
