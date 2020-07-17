import React from "react";
import axios from "axios";

import "./posts-container.styles.scss";

import Post from "../post/post.component";

class PostsContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			posts: [],
		};
	}
	async componentDidMount() {
		try {
			const posts = await axios.get("http://localhost:5000/posts");
			this.setState({ posts: posts.data });
		} catch (error) {
			console.error(error.message);
		}
	}

	handleDeletePost = async (id) => {
		try {
			await axios.delete(
				`http://localhost:5000/posts/${id}`
			);
			const newPosts = [...this.state.posts];
			this.setState({ posts: newPosts.filter(post => post.postId !== id) });
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
						{this.state.posts.map(
							({ postId, name, description }) => (
								<Post
									key={postId}
									name={name}
									description={description}
									onDelete={() => this.handleDeletePost(postId)}
								/>
							)
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default PostsContainer;
