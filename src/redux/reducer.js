const initialState = {
	posts: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_POSTS":
			return {
				...state,
				posts: action.posts
			};
		default:
			return state;
	}
};

export default reducer;
