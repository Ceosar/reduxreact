import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;


    let dialogsElements = state.dialogs.map(user=><DialogItem name={user.name} id={user.id} img={user.img} />)

    let messagesElements = state.messages.map(elem=><Message message={elem.message} id={elem.id} />)

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        let action = updateNewMessageBodyCreator(body)
        props.dispatch(action)
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.users}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div className={classes.submitMessage}>
                    <textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message..."
                        className=""
                    ></textarea>
                    <button onClick={ onSendMessageClick }>Send</button>
                </div>
            </div>

            {/* <div className={classes.submitMessage}>
                <textarea ref={newMessageRef}></textarea>
                <button onClick={submitBtn}>Отправить</button>
            </div> */}
        </div>
    );
}

export default Dialogs;