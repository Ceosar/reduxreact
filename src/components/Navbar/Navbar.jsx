import { NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css"

const Navbar = () => {
    const activeLink = "active";
    const normalLink = "item";

    return (
        <nav className="nav">
            <NavLink to="/profile" className={({isActive}) => isActive ? activeLink : normalLink}>
                Profile
            </NavLink>

            <NavLink to="/dialogs" className={({isActive}) => isActive ? activeLink : normalLink} >
                Messages
            </NavLink>

            <NavLink to="/news" className={({isActive}) => isActive ? activeLink : normalLink} >
                News
            </NavLink>

            <NavLink to="/music" className={({isActive}) => isActive ? activeLink : normalLink} >
                Music
            </NavLink>

            <NavLink to="/settings" className={({isActive}) => isActive ? activeLink : normalLink} >
                Settings
            </NavLink>

            <a className={({isActive}) => isActive ? activeLink : normalLink}>Friends</a>
        </nav>
     );
}

export default Navbar;