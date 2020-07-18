import React from 'react';

import "./post.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const Post = ({ name, description, onDelete }) => (
    <tr>
        <td>{ name }</td>
        <td>{ description }</td>
        {/* <td><button onClick={onDelete}>Eliminar</button></td> */}
        <td><CustomButton onClick={onDelete}>Eliminar</CustomButton></td>
    </tr>
);

export default Post;
