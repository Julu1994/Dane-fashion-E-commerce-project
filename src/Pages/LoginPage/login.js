import React from "react";
import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="login-main">
                <div className="login-info">
                    <h1 className="login-header">Login</h1>
                    <form>
                        <div className="login-email">
                            <input
                                className="login-field"
                                type="text"
                                required
                            />
                            <label className="login-placeholder">Email</label>
                        </div>
                        <input
                            className="login-password"
                            type="password"
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
