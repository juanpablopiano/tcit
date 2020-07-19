import React from "react";

import "./post.styles.scss";

import Button from "react-bootstrap/Button";

const Post = ({ name, description, onDelete }) => (
	<div className="post-row post">
		<div className="post-col">{ name }</div>
		<div className="post-col">{ description }</div>
        <div className="post-col"><Button onClick={onDelete} size="sm" variant="outline-danger">Eliminar</Button></div>
	</div>
);

export default Post;
