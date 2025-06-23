import React from "react";
import icon from "../../../assets/icons/list_icon.png"
import "./list.css";

export const List = () => {
    return (
        <div className="list">
            <img className="icon" alt="Icon" src={icon} />
        </div>
    );
}