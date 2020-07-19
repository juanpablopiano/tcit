import React from "react";
import axios from "axios";

// setup of redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPosts, deletePost } from "../../redux/actions";

import "./posts-container.styles.scss";

import Post from "../post/post.component";

class PostsContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			loading: false,
		};
	}

	async componentDidMount() {
		this.setState({ loading: true });
		try {
			const posts = await axios.get("http://localhost:5000/posts");
			this.props.setPosts(posts.data);
			this.setState({ loading: false });
		} catch (error) {
			console.error(error.message);
		}
	}

	handleDeletePost = async (id) => {
		try {
			const deletedPost = await axios.delete(
				`http://localhost:5000/posts/${id}`
			);
			this.props.deletePost(deletedPost.data.id);
		} catch (error) {
			console.log(error.message);
		}
	};

	render() {
		const { searchField, posts } = this.props;
		let filteredPosts = posts.filter((post) =>
			post.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="post-container">
				<div className="post-header">
					<div className="post-row">
						<div className="post-col">Nombre</div>
						<div className="post-col">Descripción</div>
						<div className="post-col">Acción</div>
					</div>
				</div>
				<div className="post-body">
					{filteredPosts.map(({ id, name, description }) => (
						<Post
							key={id}
							name={name}
							description={description}
							onDelete={() => this.handleDeletePost(id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		searchField: state.searchField,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ setPosts: setPosts, deletePost: deletePost },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
