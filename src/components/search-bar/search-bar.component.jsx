import React from "react";

// setup of redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeSearchField } from "../../redux/actions";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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
			<Navbar expand="lg">
				<Form inline>
					<FormControl
						type="text"
						placeholder="Filtro de nombre"
						className="mr-sm-2"
						value={this.props.searchField}
						onChange={this.handleChange}
					/>
				</Form>
			</Navbar>
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
