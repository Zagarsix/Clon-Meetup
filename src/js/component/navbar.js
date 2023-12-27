import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="../img/logo-4GeeksAcademy.png"></img>
			</Link>
			
		</div>
	);
};
