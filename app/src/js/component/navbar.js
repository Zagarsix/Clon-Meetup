import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-4GeeksAcademy.png";


export const Navbar = () => {
	return (

		<div className="container-fluid d-flex justify-content-between" style={{ backgroundColor: "grey" }}
		fixed="top"
		expand="lg"
		
		>
			<div className="container-fluid logo py-2 mb-1">
				<Link className="navbar-brand me-5" to="/">
					<img src={logo} alt="logo-4Geeks" width={200} height={100}></img>
				</Link>
			</div>
			<div className="button-login py-3 m-2">
				<button type="button" className="btn btn-primary" to="/login">Login</button>
			</div>
		</div>


	);
};
