import React, { useState } from "react";
import "./login.scss";
import Input from "../../Components/GlobalComponents/input";
import { GoogleButton } from "../../Components/GlobalComponents/button";
import Button from "../../Components/GlobalComponents/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const getEmail = (event) => {
        setEmail(event.target.value);
    };
    const getPassword = (event) => {
        setPassword(event.target.value);
    };
    const userAuthenticate = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                toast.error(error.message);
            });
        toast.success("Successful Login");
        navigate("/");

        console.log(email, password);
    };
    return (
        <div className="login">
            <ToastContainer />
            <div className="login-main">
                <div className="login-info">
                    <h1 className="login-header">Login</h1>
                    <form onSubmit={userAuthenticate}>
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
                        <Button
                            text="Login"
                            color={"bg-pink"}
                            type={"submit"}
                        />
                    </form>
                    <h4 className="login-divider">or</h4>
                    <GoogleButton text={"LOGIN WITH GOOGLE"} />
                </div>
                <div className="login-img"></div>
            </div>
        </div>
    );
};

export default Login;
