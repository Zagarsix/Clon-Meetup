import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { Events } from "./views/events";
import { Meetup } from "./views/meetup";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ToastContainer } from "react-toastify";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/events/:index" element={<Events />} />
						<Route path="/meetup/:theid" element={<Meetup />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
					<ToastContainer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
