import React from "react";
import icon from "../../../assets/icons/file_icon.png";
import "./file_icon.css";

export const File = () => {
    return (
        <div className="file">
            <img className="icon" alt="Icon" src={icon} />
        </div>
    )
}