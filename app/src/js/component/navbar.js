import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Meetup-logo.png";
import { useState } from "react";

export const Navbar = () => {
	const [showPassword, setShowPassword] = useState(false);
	return (

		<div className="container-fluid d-flex justify-content-between" style={{ backgroundColor: "rgb(66,66,66)" }}
			fixed="top"
			expand="lg"	>
			<div className="container-fluid logo py-2">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="logo-4Geeks" width={250} height={150}></img>
				</Link>
			</div>

			<div className="button py-3 m-2">
				{/* <!-- Button trigger modal --> */}
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
					Login
				</button>

				{/* <!-- Modal --> */}
				<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<div class="d-flex col-md-6">
									<input type="text" class="form-control" id="Username" placeholder="Username">
									</input>
									<span>
										<i className="eyeSecurity fa fa-eye" aria-hidden="true"></i>
									</span>
								</div>
								<div Class="d-flex col-md-6">
									<input type="text" Class="form-control" id="Password" placeholder="Password">
									</input>
									<span>
										<i className="eyeSecurity fa fa-eye" aria-hidden="true"></i>
									</span>
								</div>

							</div>
							<div className="modal-footer justify-content-start">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Login</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>


	);
};
