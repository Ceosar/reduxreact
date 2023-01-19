import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(elem=><Post name={elem.name} message={elem.message} likes={elem.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = {type:"UPDATE-NEW-POST-TEXT", newText:text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick = { addPost } >Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
     );
}

export default MyPosts;

// let addPost = () => {
//     let text = newPostElement.current.value;
//     props.addPost(text)
//     props.updateNewPostText("");
// }

// let onPostChange = () => {
//     let text = newPostElement.current.value;
//     props.updateNewPostText(text);
// }