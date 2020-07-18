import React from "react";

import "./search-bar.styles.scss";

// setup of redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeSearchField } from "../../redux/actions";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class SearchBar extends React.Component {
	constructor() {
		super();

		this.state = {
			searchText: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		this.props.changeSearchField("");
	};

	handleChange = (event) => {
		const { value } = event.target;

		this.props.changeSearchField(value);
	};

	render() {
		return (
			<div className="search-bar">
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="searchText"
						type="text"
						handleChange={this.handleChange}
						value={this.props.searchField}
						label="Filtro de Nombre"
					/>
					<CustomButton type="submit">Buscar</CustomButton>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ changeSearchField: changeSearchField },
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
