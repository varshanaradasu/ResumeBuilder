import React from "react";
import { Link } from "react-router-dom";
import "./DashboardHeader.css";

const Header = () => {
    return (
        <header className="header">
            <h2 className="logo">Resume Builder</h2>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
