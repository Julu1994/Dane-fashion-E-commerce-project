import React, { useState } from "react";
import "./register.scss";
import Input from "../../Components/GlobalComponents/input";
import Button from "../../Components/GlobalComponents/button";

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
        console.log(name, email, password, confirmPassword);
    };
    return (
        <div className="register">
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
                        <Input text={"Name"} type={"text"} onchange={getName} />
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
