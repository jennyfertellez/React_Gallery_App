import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/bunny">Bunny</NavLink>
                </li>
                <li>
                    <NavLink to="/kitten">Kitten</NavLink>
                </li>
                <li>
                    <NavLink to="llama">Llama</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;