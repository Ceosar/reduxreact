import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(user=><DialogItem name={user.name} id={user.id} img={user.img} />)

    let messagesElements = props.state.messages.map(elem=><Message message={elem.message} id={elem.id} />)

    let newMessageRef = React.createRef();

    let submitBtn = () => {
        let text = newMessageRef.current.value;
        alert(text)
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.users}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            <div className={classes.submitMessage}>
                <textarea ref={newMessageRef}></textarea>
                <button onClick={submitBtn}>Отправить</button>
            </div>
            </div>
        </div>
    );
}

export default Dialogs;