import React from "react";
import { Link } from "react-router-dom";

import "./trendy.scss";

const Trendy = () => {
    return (
        <div className="trendy">
            <Link to="/lifestyle">
                <div className="trendy-left">
                    <div className="trendy-left-main">
                        <h2 className="trendy-left-main-header">
                            Scandinavian
                        </h2>
                        <p className="trendy-left-main-title">
                            Informal, sophisticated look
                        </p>
                    </div>

                    <Link className="trendy-link" to="/shop">
                        <button className="trendy-link-btn">See more</button>
                    </Link>
                </div>
            </Link>
            <Link to="/lifestyle">
                <div className="trendy-right">
                    <div className="trendy-right-main">
                        <h2 className="trendy-right-main-header">Sportswear</h2>
                        <p className="trendy-right-main-title">
                            Finess, yoga, running
                        </p>
                    </div>

                    <Link className="trendy-link" to="/treasure">
                        <button className="trendy-link-btn">See more</button>
                    </Link>
                </div>
            </Link>
        </div>
    );
};

export default Trendy;
