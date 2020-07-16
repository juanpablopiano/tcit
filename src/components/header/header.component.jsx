import React from "react";

import "./header.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			searchText: ""
		}
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		this.setState({ searchText: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<form>
					<FormInput
						name="searchText"
						type="text"
						handleChange={this.handleChange}
						value={this.state.searchText}
						label="Filtro de Nombre"
						required
					/>
					<CustomButton type="submit" >Buscar</CustomButton>
				</form>
			</div>
		);
	}
}

export default Header;
