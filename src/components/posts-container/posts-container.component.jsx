import React from "react";
import axios from "axios";

// setup of redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPosts } from "../../redux/actions";

import "./posts-container.styles.scss";

import Post from "../post/post.component";

class PostsContainer extends React.Component {
	async componentDidMount() {
		try {
			const posts = await axios.get("http://localhost:5000/posts");
			this.props.setPosts(posts.data)
			// this.setState({ posts: posts.data });
			// this.props.posts = posts;
		} catch (error) {
			console.error(error.message);
		}
	}

	handleDeletePost = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/posts/${id}`);
			const newPosts = [...this.state.posts];
			this.setState({
				posts: newPosts.filter((post) => post.postId !== id),
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	render() {
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
						{this.props.posts.map(
							({ postId, name, description }) => (
								<Post
									key={postId}
									name={name}
									description={description}
									onDelete={() =>
										this.handleDeletePost(postId)
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
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setPosts: setPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
