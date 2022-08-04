import "./catagory.scss";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const Catagory = ({ clickCatagory, showcatagory }) => {
    return (
        <div className="catagory">
            <div className="catagory-main">
                <h2 className="catagory-header">Catagory</h2>
                <div>
                    <AiOutlinePlus
                        size={20}
                        onClick={clickCatagory}
                        className="catagory-btn"
                    />
                </div>
            </div>
            {showcatagory && (
                <ul className="catagory-list">
                    <li className="catagory-item">
                        <Link className="catagory-address" to="/shop">
                            Men
                        </Link>
                    </li>
                    <li className="catagory-item">
                        <Link className="catagory-address" to="/shop">
                            Woman
                        </Link>
                    </li>
                    <li className="catagory-item">
                        <Link className="catagory-address" to="/shop">
                            Kids
                        </Link>
                    </li>
                    <li className="catagory-item">
                        <Link className="catagory-address" to="/shop">
                            New Arrivals
                        </Link>
                    </li>
                    <li className="catagory-item">
                        <Link className="catagory-address" to="/shop">
                            Popular Now
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Catagory;
