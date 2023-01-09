import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.cont_img} src='https://mobimg.b-cdn.net/v3/fetch/dd/ddff7e568e8db0ffc20ec4267350791f.jpeg' />
            </div>

            <div>
                ava + disc
            </div >
        </div>
     );
}

export default ProfileInfo;