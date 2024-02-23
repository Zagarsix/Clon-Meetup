import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/Meetup-logo.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	// const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	useEffect(() => { }, []);

	// If user signed in, redirect to home page
	useEffect(() => {
		// if (store.currentUser !== null) navigate("/profile");
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
				<div className="d-flex">
					<button type="button" className="btn btn-primary px-2 mx-2" data-bs-toggle="modal" data-bs-target="#button-register">
						Register
					</button>
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#button-login">
						Login
					</button>
				</div>
				{/* <!-- Modal Login --> */}
				<div className="modal fade" id="button-login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<form onSubmit={(e) => actions.handleLogin(e)}>
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<div className="d-flex col-md-6">
										<input
											type="text"
											className="form-control"
											id="email-login"
											name="email"
											placeholder="email"
											value={store.email}
											onChange={actions.handleChange}
										/>
									</div>
									<div className="d-flex col-md-6">
										<input
											type="password"
											className="form-control"
											id="password-login"
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
									<button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Login</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				{/* <!-- Modal Register--> */}
				<div className="modal fade" id="button-register" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<form onSubmit={(e) => actions.handleRegister(e)}>
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="exampleModalLabel">Register</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<div className="d-flex col-md-6">
										<input
											type="text"
											className="form-control"
											id="name"
											name="name"
											placeholder="name"
											value={store.name}
											onChange={actions.handleChange}
										/>
									</div>
									<div className="d-flex col-md-6">
										<input
											type="text"
											className="form-control"
											id="lastname"
											name="lastname"
											placeholder="lastname"
											value={store.lastname}
											onChange={actions.handleChange}
										/>
									</div>
									<div className="d-flex col-md-6">
										<input
											type="text"
											className="form-control"
											id="username"
											name="username"
											placeholder="username"
											value={store.username}
											onChange={actions.handleChange}
										/>
									</div>
									<div className="d-flex col-md-6">
										<input
											type="text"
											className="form-control"
											id="email"
											name="email"
											placeholder="email"
											value={store.email}
											onChange={actions.handleChange}
										/>
									</div>
									<div className="d-flex col-md-6">
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
									<button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Register now</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div >


	);
};
