import React from "react";
import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="login-main">
                <div className="login-info">
                    <h1 className="login-header">Login</h1>
                    <form>
                        <input
                            className="login-email"
                            type="text"
                            placeholder="Email"
                            required
                        />
                        <input
                            className="login-password"
                            type="text"
                            placeholder="Password"
                            required
                        />
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
