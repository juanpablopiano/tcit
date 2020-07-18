import React from "react";
import axios from "axios";

// setup of redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPosts, deletePost } from "../../redux/actions";

import "./posts-container.styles.scss";

import Post from "../post/post.component";

class PostsContainer extends React.Component {
	async componentDidMount() {
		try {
			const posts = await axios.get("http://localhost:5000/posts");
			this.props.setPosts(posts.data);
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
		const filteredPosts = posts.filter((post) =>
			post.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="post-container">
				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Descripción</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{filteredPosts.map(
							({ id, name, description }) => (
								<Post
									key={id}
									name={name}
									description={description}
									onDelete={() =>
										this.handleDeletePost(id)
									}
								/>
							)
						)}
					</tbody>
				</table>
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
