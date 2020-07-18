export const setPosts = (posts) => {
	return { type: "SET_POSTS", posts };
};

export const deletePost = (id) => {
	return { type: "DELETE_POST", id };
};

export const addPost = (post) => {
	return { type: "ADD_POST", post };
};

export const changeSearchField = (text) => {
	return { type: "CHANGE_SEARCH_FIELD", text };
};
