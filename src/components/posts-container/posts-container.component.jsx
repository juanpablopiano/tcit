import React from "react";

import "./posts-container.styles.scss";

import Post from "../post/post.component";

class PostsContainer extends React.Component {
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
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</tbody>
				</table>
			</div>
		);
	}
}

export default PostsContainer;
