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
		<>
			<div className="tittle-events d-flex justify-content-between" style={{ backgroundColor: "rgb(66,66,66)", color: "white" }}>
				<main className="main-section w-100 h-100 p-5">
					<span>{store.events[index]?.day}</span>
					<h1>{store.events[index]?.title}</h1>
					<h5 className="Meetup d-flex justify-content-between" >
						<Link to={"/meetup/" + (store.events[index]?.meetup)} style={{ textDecoration: "none" }}>
							{getMeetup(store.events[index]?.meetup).name}
						</Link>
					</h5>
				</main>
				<div class="card p-4 m-4">
					<card className="PeopleGoing p-3 my-3 justify-content-center" >
						<img
							img="https://media.istockphoto.com/id/1424987933/es/foto/compa%C3%B1eros-de-trabajo-con-las-manos-apiladas-en-la-oficina.jpg?s=1024x1024&w=is&k=20&c=CM1W8wRHQbDxdEFwBdbGWI5AcAnVLzAJF0xAKI-mX28="
							imgLabel="peoplegoing"
							title="people going"
							description=""></img>
					</card>
				</div>
			</div>
			<main>
				<div className="detailsEvent justify-content-between">
					<div className="photoEvent">
						<div className="cardEvent row">
							<div className="col-md-9 py-2">
								<img>
								</img>
							</div>
						</div>
						<div className="ResumeEvent" style={{ backgroundColor: "pink" }}>
							<card>
								<p>{store.events[index]?.day}</p>
								<p>{store.events[index]?.time}</p>
							</card>
						</div>
					</div>
					<div className="details mx-50">
						<h3>Detalles</h3>
						<p>Lorem ipsum</p>
					</div>


				</div>
			</main>
		</>
	);
};
