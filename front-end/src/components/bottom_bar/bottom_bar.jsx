import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../icons/avatar/avatar";
import { Icon } from "../icons/icon";
import "./bottom_bar.css";

//COMPONENTE DO BOTTOM BAR 

export const BottomBar = () => {
    return (
        <div className="bottom-bar-container">

            <NavLink to="/home" className="bottom-bar-link">
                <Icon name="home" size={32} />
            </NavLink>

            <NavLink to="/matricula" className="bottom-bar-link">
                <Icon name="book" size={32} />
            </NavLink>

            <NavLink to="/home" className="bottom-bar-link">
                <Icon name="coffee" size={32} />
            </NavLink>

            <NavLink to="/home" className="bottom-bar-link">
                <Avatar initials="NF" size={42} />
            </NavLink>
        </div>
    );
};