import React from "react";
import icon from "../../../assets/icons/book_icon.png";
import "./book_icon.css";

export const Book = () => {
    return (
        <div className="book">
            <img className="icon" alt="Icon" src={icon} />
        </div>
    )
}