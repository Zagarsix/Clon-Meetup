import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";


export const Events = () => {
	const { store, actions } = useContext(Context);
	const { index } = useParams(); //función que usa la URL y según la variable que le indico (index), me trae el valor del elemento que requiero.

	const getMeetup = (id) => {

		let organizador = store.meetups.filter(meet => id == meet.ID)
		return organizador[0]
	}

	return (
		<div className="tittle-events d-flex justify-content-between" style={{ backgroundColor: "rgb(66,66,66)", color: "white" }}>
			<main className="main-section w-100 h-100 p-5 mb-2">
				<span>{store.events[index]?.day}</span>
				<h1>{store.events[index]?.time}</h1>


				<h5 className="list-group-item d-flex justify-content-between">
					<Link to={"/meetup/" + (store.events[index]?.meetup)}>
						{getMeetup(store.events[index]?.meetup).name}
					</Link>
				</h5>

			</main>

		</div>
	);
};
