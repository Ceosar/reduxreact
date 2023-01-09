import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css"

const DialogItem = (props) => {
    return(
        <div className={classes.person}>
            <NavLink to={'/dialogs/'+ props.id} ><img className={classes.person_logo} src={props.img} alt="not found"/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
