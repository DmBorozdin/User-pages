import React from "react";
import "./post.scss";
import {ReactComponent as CommentLogo} from "../../img/icons/comment.svg";
import {ReactComponent as EyeLogo} from "../../img/icons/eye.svg";

const Post = ({data}) => {
    return (
        <div className="post">
            <img src={data.img} alt="Abstract Wallpaper" className="post__img"/>
            <div className="post__author">
                <CommentLogo/>
                <p>{data.user.name} {data.user.surname} <span>commented:</span></p>
            </div>
            <div className="post__info">
                <p className="post__info_text">{data.text}</p>
                <p className="post__info_time">- {data.user.name}, <span>{data.time}</span></p>
            </div>
            <div className="post__more-info">
                <div className="post__more-info_item">
                    <EyeLogo/>
                    <p>{data.views}</p>
                </div>
                <div className="post__more-info_item">
                    <CommentLogo/>
                    <p>{data.commentsNumber}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;