import React from 'react';

import "./homepage.styles.scss";

import SearchBar from "../../components/search-bar/search-bar.component";
import PostsContainer from "../../components/posts-container/posts-container.component";

const Homepage = () => (
    <div>
        <SearchBar />
        <PostsContainer />
    </div>
)

export default Homepage;
