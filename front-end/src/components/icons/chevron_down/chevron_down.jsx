import React from "react";
import icon from "../../../assets/icons/chevron_down.png";
import "./chevron_down.css";

export const ChevronDown = () => {
    return (
        <div className="chevron-down">
            <img className="icon" alt="Icon" src={icon} />
        </div>
    )
}