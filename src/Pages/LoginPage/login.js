import React from "react";
import "./login.scss";
import Input from "../../Components/GlobalComponents/input";

const Login = () => {
    return (
        <div className="login">
            <div className="login-main">
                <div className="login-info">
                    <h1 className="login-header">Login</h1>
                    <form>
                        <Input text={"Email"} type={"text"} />
                        <Input text={"Password"} type={"password"} />

                        <button className="login-button">Login</button>
                    </form>

                    <h4 className="login-divider">or</h4>
                    <button className="login-google">LOGIN WITH GOOGLE</button>
                </div>

                <div className="login-img"></div>
            </div>
        </div>
    );
};

export default Login;
