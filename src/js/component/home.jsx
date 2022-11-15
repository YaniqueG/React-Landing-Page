import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./Navbar.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar/>	
		<div className="container">
		  <Jumbotron/>
		  <Card/>
		  
		  


		</div>
			

		</div>
	);
};

export default Home;
