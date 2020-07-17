import React from 'react';

import "./homepage.styles.scss";

import SearchBar from "../../components/search-bar/search-bar.component";
import PostsContainer from "../../components/posts-container/posts-container.component";
import NewPostBar from "../../components/new-post-bar/new-post-bar.component";

const Homepage = () => (
    <div>
        <SearchBar />
        <PostsContainer />
        <NewPostBar />
    </div>
)

export default Homepage;
