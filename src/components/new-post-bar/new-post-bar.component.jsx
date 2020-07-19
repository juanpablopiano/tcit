import React from "react";
import axios from "axios";

// setup of redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPost } from "../../redux/actions";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

		const newPost = await axios.post("http://localhost:5000/posts", body);
		this.props.addPost(newPost.data);

		this.setState({ name: "", description: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<Navbar expand="lg" >
				<Form inline onSubmit={this.handleSubmit}>
					<Row>
						<Col>
							<FormControl
								type="text"
								placeholder="Nombre"
								name="name"
								className="mr-sm-2"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</Col>
						<Col>
							<FormControl
								type="text"
								placeholder="Descripción"
								name="description"
								className="mr-sm-2"
								value={this.state.description}
								onChange={this.handleChange}
							/>
						</Col>
						<Col>
							<Button type="submit" variant="dark">
								Crear
							</Button>
						</Col>
					</Row>
				</Form>
			</Navbar>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addPost: addPost }, dispatch);
};

export default connect(null, mapDispatchToProps)(NewPostBar);
