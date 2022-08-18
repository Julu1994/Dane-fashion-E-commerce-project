import React from "react";
import { Link } from "react-router-dom";

import "./trendy.scss";

const Trendy = () => {
    return (
        <div className="trendy">
            <Link to="/lifestyle">
                <div className="trendy-left">
                    <h2 className="trendy-left-main">Scandinavian</h2>
                    <p className="trendy-left-title">
                        Informal, sophisticated look
                    </p>
                    <Link className="trendy-link" to="/lifestyle">
                        <button className="trendy-link-btn">See more</button>
                    </Link>
                </div>
            </Link>
            <Link to="/lifestyle">
                <div className="trendy-right">
                    <h2 className="trendy-right-main">Sportswear</h2>
                    <p className="trendy-right-title">Finess, yoga, running</p>
                    <Link className="trendy-link" to="/lifestyle">
                        <button className="trendy-link-btn">See more</button>
                    </Link>
                </div>
            </Link>
        </div>
    );
};

export default Trendy;
