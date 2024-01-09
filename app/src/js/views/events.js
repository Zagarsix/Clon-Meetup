import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Events = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="tittle-events d-flex justify-content-between" style={{ backgroundColor: "rgb(66,66,66)" }}>
			<main className="main-section w-100 h-100 p-5 mb-2">
				<span style={{ backgroundColor: "red" }}>Apr 28</span>
				<h1 style={{ backgroundColor: "blue" }}>5th Event for meetup 1</h1>
				<h5 className="list-group-item d-flex justify-content-between">
					<Link to={"/meetup/"}>
						Meetup X
					</Link>
				</h5>
			</main>
			<card>
				
			</card>
		</div>
	);
};
