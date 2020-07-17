import React from "react";
import axios from "axios";

import "./new-post-bar.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class NewPostBar extends React.Component {
	constructor() {
		super();

		this.state = {
			name: "",
			description: "",
		};
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        
        const name = this.state.name;
        const description = this.state.description;

        if (!name || !description) return;

        const body = { name, description };

        axios.post("http://localhost:5000/posts", body)

        this.setState({ name: "", description: "" });
        this.forceUpdate()
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="new-post-bar">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="name"
						type="text"
						handleChange={this.handleChange}
						value={this.state.name}
						label="Nombre"
					/>
					<FormInput
						name="description"
						type="text"
						handleChange={this.handleChange}
						value={this.state.description}
						label="Descripción"
					/>
					<CustomButton type="submit">Crear</CustomButton>
				</form>
			</div>
		);
	}
}

export default NewPostBar;
