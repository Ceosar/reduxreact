import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.user_of_post}>
                <img className={classes.post_logo} src="https://sportishka.com/uploads/posts/2022-11/1667444564_42-sportishka-com-p-dzheison-stetkhem-shakhmati-krasivo-42.jpg" />
                <p className={classes.user_name}>{props.name}</p>
            </div>
            <div className={classes.cont_post}>{props.message}</div>
            <div>
                <button>Like</button>
                <span className={classes.likes}>Likes count: {props.likes}</span>
            </div>
        </div>
     );
}

export default Post;