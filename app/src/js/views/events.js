import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Events = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="tittle-events d-flex justify-content-between" style={{ backgroundColor: "rgb(66,66,66)" }}>
			<main className="main-section w-100 h-100 p-5 mb-2">
				<span style={{ backgroundColor: "red"}}>Apr 28</span>
				<h1 style={{ backgroundColor: "blue"}}>5th Event for meetup 1</h1>

				<p>
					{store.meetups.map((item, index) => {
						return (
							<h5
								key={index}
								className="list-group-item d-flex justify-content-between"
								style={{ background: item.background }}>
								<Link to={"/meetup/" + index}>
									<span>Meetup {item.name}</span>
								</Link>
								
							</h5>
						);
					})}
				</p>
			</main>
			<img></img>
		</div>


	);
};
