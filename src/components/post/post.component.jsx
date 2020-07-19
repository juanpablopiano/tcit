import React from "react";

import "./post.styles.scss";

import Button from "react-bootstrap/Button";

const Post = ({ name, description, onDelete }) => (
	// <tr>
	//     <td>{ name }</td>
	//     <td>{ description }</td>
	//     {/* <td><button onClick={onDelete}>Eliminar</button></td> */}
	//     <td><CustomButton onClick={onDelete}>Eliminar</CustomButton></td>
	// </tr>
	<div className="post-row post">
		<div className="post-col">{ name }</div>
		<div className="post-col">{ description }</div>
		{/* <div className="post-col"><button onClick={onDelete}>Eliminar</button></div> */}
        <div className="post-col"><Button size="sm" variant="outline-danger">Eliminar</Button></div>
	</div>
);

export default Post;
