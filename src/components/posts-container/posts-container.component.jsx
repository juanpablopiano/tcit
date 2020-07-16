import React from 'react';

import "./posts-container.styles.scss";

import Post from "../post/post.component";

class PostsContainer extends React.Component {
    render() {
        return (
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}

export default PostsContainer;
