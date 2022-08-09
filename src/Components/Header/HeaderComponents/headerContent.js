import "./headerContent.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import Avater from "./avater";
import { toggleActions } from "../../../Redux/Features/toggleSlice";

export const HeaderContent = () => {
    const userDetails = useSelector((state) => state.user.userInfo);
    const dispatcher = useDispatch();
    const toggleDispatch = () => {
        dispatcher(toggleActions.profileToggle());
    };
    return (
        <div className="content">
            <li className="content-search">
                <BiSearch className="content-cursor" />
            </li>
            <li className="content-login">
                {userDetails.id ? (
                    <Avater
                        onclick={toggleDispatch}
                        name={
                            userDetails.name
                                ? userDetails.name
                                : userDetails.email
                        }
                    />
                ) : (
                    <AiOutlineUser
                        onClick={toggleDispatch}
                        className="content-cursor"
                    />
                )}
            </li>
            <li className="content-cart">
                <IoBagHandleOutline className="content-cursor" />
                <p className="content-badge">5</p>
            </li>
        </div>
    );
};
