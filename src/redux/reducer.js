const initialState = {
	posts: [],
	searchField: ""
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_POSTS":
			return {
				...state,
				posts: action.posts,
			};
		case "DELETE_POST":
			return {
				...state,
				posts: state.posts.filter(
					(post) => post.id !== action.id
				),
			};
		case "ADD_POST":
			return {
				...state,
				posts: [...state.posts, action.post],
			};
		case "CHANGE_SEARCH_FIELD":
			return {
				...state,
				searchField: action.text
			}
		default:
			return state;
	}
};

export default reducer;
