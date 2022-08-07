import React, { useState } from "react";
import "./register.scss";
import Input from "../../Components/GlobalComponents/input";
import Button from "../../Components/GlobalComponents/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/config";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const getName = (event) => {
        setName(event.target.value);
    };
    const getEmail = (event) => {
        setEmail(event.target.value);
    };
    const getPassword = (event) => {
        setPassword(event.target.value);
    };
    const getConfirm = (event) => {
        setConfirmPassword(event.target.value);
    };

    const register = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Error! Passwords didn't match", {
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success("Successfully Registered!", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                    console.log(user);
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    };
    return (
        <div className="register">
            <ToastContainer />
            <div className="register-main">
                <div className="register-welcome">
                    <h3 className="register-title">Welcome</h3>
                    <h4 className="register-title">
                        We appriciate your presence
                    </h4>
                </div>
                <div className="register-info">
                    <h2 className="register-header"> Register Here</h2>
                    <form onSubmit={register}>
                        {/* <Input text={"Name"} type={"text"} onchange={getName} /> */}
                        <Input
                            text={"Email"}
                            type={"text"}
                            onchange={getEmail}
                        />
                        <Input
                            text={"Password"}
                            type={"password"}
                            onchange={getPassword}
                        />
                        <Input
                            text={"Confirm Password"}
                            type={"password"}
                            onchange={getConfirm}
                        />
                        <Button
                            type={"submit"}
                            text="Register"
                            color={"bg-pink"}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
