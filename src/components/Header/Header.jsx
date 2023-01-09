import React from "react";
import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
            <img width={60} src='https://cdn.icon-icons.com/icons2/639/PNG/512/social_media_logo_instagram_icon-icons.com_59062.png'/>
        </header>
     );
}

export default Header;