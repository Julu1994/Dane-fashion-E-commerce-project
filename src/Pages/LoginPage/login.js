import React, { useState } from "react";
import "./login.scss";
import Input from "../../Components/GlobalComponents/input";
import { GoogleButton } from "../../Components/GlobalComponents/button";
import Button from "../../Components/GlobalComponents/button";
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/config";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
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

    //Login with email and password
    const userAuthenticate = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                toast.error(error.message);
            });
        toast.success("Successful Login");
        navigate("/");
    };

    // Login with a google account
    const provider = new GoogleAuthProvider();
    const googleAuthenticate = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                toast.success("Successfully logged in");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
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
                    <GoogleButton onclick={googleAuthenticate} />
                    <h5 className="login-extraLinks">
                        <Link className="login-extraLinks" to="/reset">
                            Forgot password ? Reset here
                        </Link>
                    </h5>
                    <h5 className="login-extraLinks">
                        <Link to="/Register" className="login-extraLinks">
                            Don't have an account ? click here
                        </Link>
                    </h5>
                </div>
                <div className="login-img"></div>
            </div>
        </div>
    );
};

export default Login;
