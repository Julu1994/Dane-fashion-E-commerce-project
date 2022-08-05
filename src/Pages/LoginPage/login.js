import React from "react";
import "./login.scss";
import Input from "../../Components/GlobalComponents/input";
import { GoogleButton } from "../../Components/GlobalComponents/button";
import Button from "../../Components/GlobalComponents/button";

const Login = () => {
    return (
        <div className="login">
            <div className="login-main">
                <div className="login-info">
                    <h1 className="login-header">Login</h1>
                    <form>
                        <Input text={"Email"} type={"text"} />
                        <Input text={"Password"} type={"password"} />
                        <Button text="Login" color={"bg-pink"} />
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
