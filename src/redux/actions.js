export const setPosts = (posts) => {
	return { type: "SET_POSTS", posts };
};

export const deletePost = (postId) => {
	return { type: "DELETE_POST", postId };
};

export const addPost = (post) => {
	return { type: "ADD_POST", post };
};

export const changeSearchField = (text) => {
	return { type: "CHANGE_SEARCH_FIELD", text };
};
