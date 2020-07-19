import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

import Container from "react-bootstrap/Container";

function App() {
	return (
		<div className="App">
			<Container>
				<HomePage />
			</Container>
		</div>
	);
}

export default App;
