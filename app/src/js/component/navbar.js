import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-4GeeksAcademy.png";


export const Navbar = () => {
	return (
		
		<div justify-content="space-between">
			<Link className="navbar-brand me-5" to="/">
				<img src={logo} alt="logo-4Geeks" width={200} height={100}></img>
			</Link>
<button>
	
</button>

		</div>
	
		
	);
};
