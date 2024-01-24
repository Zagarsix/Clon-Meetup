import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/Meetup-logo.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => { }, []);

	// If user signed in, redirect to home page
	useEffect(() => {
		if (store.currentUser !== null) navigate("/profile");
	}, [store.currentUser]);

	return (

		<div className="container-fluid d-flex justify-content-between" style={{ backgroundColor: "rgb(66,66,66)" }}
			fixed="top"
			expand="lg"	>
			<div className="container-fluid logo">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="logo-4Geeks" width={150} height={80}></img>
				</Link>
			</div>

			<div className="button py-1 m-2">
				{/* <!-- Button trigger modal --> */}
				<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
					Login
				</button>

				{/* <!-- Modal --> */}
				<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content" onSubmit={(e) => actions.handleLogin(e, navigate)}>
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<div className="d-flex col-md-6">
									<input
										type="text"
										className="form-control"
										id="Username"
										name="username"
										placeholder="Username"
										value={store.username}
										onChange={actions.handleChange}
									/>
								</div>
								<div Class="d-flex col-md-6">
									<input
										type="password"
										className="form-control"
										id="password"
										name="password"
										placeholder="Password"
										value={store.password}
										onChange={actions.handleChange}
									/>
									<span id="icon-eye">
										<i className="fa fa-eye" aria-hidden="true"></i>
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
