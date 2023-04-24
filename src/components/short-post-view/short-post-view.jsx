import React from "react";

const ShortPostView = ({post}) => {
    return (
        <div className="post-short-view">
            <p>{post.title}</p>
        </div>
    );
}

export default ShortPostView;