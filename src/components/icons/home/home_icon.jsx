import React from "react";
import icon from "../../../assets/icons/home_icon.png";
import "./home_icon.css";

export const Home = () => {
    return (
        <div className="home">
            <img className="icon" alt="Icon" src={icon} />
        </div>
    )
}