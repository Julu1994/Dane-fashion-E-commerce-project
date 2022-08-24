import "./reset.scss";
import React, { useState } from "react";
import Input from "../../Components/GlobalComponents/input";
import Button from "../../Components/GlobalComponents/button";
import { auth } from "../../Firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

export const Reset = () => {
    const [email, setEmail] = useState("");

    const getEmail = (event) => {
        setEmail(event.target.value);
    };
    const passwordReset = (event) => {
        event.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast("A reset link has been sent to your email");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    return (
        <div className="reset">
            <ToastContainer />
            <div className="reset-main">
                <h4>Reset Your Password</h4>
                <form onSubmit={passwordReset}>
                    <Input text={"Email"} type={"text"} onchange={getEmail} />
                    <Button text="Submit" color={"bg-pink"} type={"submit"} />
                </form>
            </div>
        </div>
    );
};
