import "./sectionHeader.scss";
import React from "react";

const SectionHeader = (props) => {
    const { header, title } = props;
    return (
        <div className="S-header">
            <h2 className="S-header-name">{header}</h2>
            <h5 className="S-header-title">{title}</h5>
        </div>
    );
};

export default SectionHeader;
