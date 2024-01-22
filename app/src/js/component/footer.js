import React from "react";
import logoCC from "../../img/logoGif.gif"

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<h5>This is a mini project created by <a href="https://4geeksacademy.com" className="text-primary" style={{ textDecoration: "none" }}> 4GeeksAcademy</a></h5>
		<p>Using: ReactJS, Bootstrap, @Fortawesome, Moment, React-router </p>
		<span>			Made with <i className="fa fa-heart text-danger" /> by {""}
			<a href="https://github.com/Zagarsix">Zagarsix</a>
		</span>
		<img className="mx-3" src={logoCC} alt="Zagarsix" width="270" height="150"></img>
	</footer>
);
