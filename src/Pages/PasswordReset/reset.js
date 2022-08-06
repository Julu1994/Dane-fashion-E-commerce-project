import "./reset.scss";
import React from "react";
import Input from "../../Components/GlobalComponents/input";
import Button from "../../Components/GlobalComponents/button";

export const Reset = () => {
    return (
        <div className="reset">
            <div className="reset-main">
                <h4>Reset Your Password</h4>
                <Input text={"Email"} type={"text"} />
                <Input text={"New Password"} type={"password"} />
                <Button text="Submit" color={"bg-pink"} />
            </div>
        </div>
    );
};
