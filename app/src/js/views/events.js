import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Events = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="tittle-events">
			<div>
				<div className="text-center" style={{ backgroundColor: "grey" }}>
				<main className="main-section w-100 h-100 p-3 mb-1">
						<p>Apr 28</p>
				<h6>5th Event for meetup 1</h6>
					{store.prueba}
				</main>

			</div>
			</div>
			<ul className="list-group">
				{store.events.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/meetup/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
