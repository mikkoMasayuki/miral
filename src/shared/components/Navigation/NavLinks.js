import React from "react";
import { NavLink } from 'react-router-dom';

const NavLinks = props => {

    return <ul>

            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>

            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>

            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>

}

export default NavLinks