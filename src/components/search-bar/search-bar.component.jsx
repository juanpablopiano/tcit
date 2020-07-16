import React from "react";

import "./search-bar.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class SearchBar extends React.Component {
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
			<div className="header">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="searchText"
						type="text"
						handleChange={this.handleChange}
						value={this.state.searchText}
						label="Filtro de Nombre"
					/>
					<CustomButton type="submit">Buscar</CustomButton>
				</form>
			</div>
		);
	}
}

export default SearchBar;
