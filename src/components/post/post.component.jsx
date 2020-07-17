import React from 'react';

import "./post.styles.scss";

const Post = ({ name, description, onDelete }) => (
    <tr>
        <td>{ name }</td>
        <td>{ description }</td>
        <td><button onClick={onDelete}>Eliminar</button></td>
    </tr>
);

export default Post;
