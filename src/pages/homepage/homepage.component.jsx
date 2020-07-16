import React from 'react';

import "./homepage.styles.scss";

import Header from "../../components/header/header.component";
import PostsContainer from "../../components/posts-container/posts-container.component";

const Homepage = () => (
    <div>
        <Header />
        <PostsContainer />
    </div>
)

export default Homepage;
