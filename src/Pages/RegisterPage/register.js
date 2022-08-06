import React from "react";
import "./register.scss";
import Input from "../../Components/GlobalComponents/input";
import Button from "../../Components/GlobalComponents/button";

const Register = () => {
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
                    <form>
                        <Input text={"Name"} type={"text"} />
                        <Input text={"Email"} type={"text"} />
                        <Input text={"Password"} type={"password"} />
                        <Input text={"Repeat Password"} type={"password"} />
                        <Button text="Register" color={"bg-pink"} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
