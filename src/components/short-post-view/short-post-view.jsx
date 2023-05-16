import React from "react";
import "./short-post-view.scss";
import {ReactComponent as TimeLogo} from "../../img/icons/time.svg";
import {ReactComponent as ChevronDownLogo} from "../../img/icons/chevron-down.svg";


const ShortPostView = ({post}) => {
    return (
        <div className="post-short-view">
            <p className="post-short-view__title">{post.title}</p>
            <div className="post-short-view__info">
                <TimeLogo/>
                <p className="post-short-view__info_text">{post.time} minutes ago</p>
                <ChevronDownLogo className="post-short-view__info_chevron-down"/>
            </div>
        </div>
    );
}

export default ShortPostView;