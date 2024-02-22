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
					<h5 className="Meetup d-flex justify-content-between">
						<Link to={"/meetup/" + (store.events[index]?.meetup)} style={{ textDecoration: "none" }}>
							{getMeetup(store.events[index]?.meetup).name}
						</Link>
					</h5>
				</main>
				<div className="card p-2">
					<card className="PeopleGoing p-3 my-3 justify-content-center">
						<img src="" img="" imgLabel="peoplegoing" title="people going" description="people who will attend the event" />
					</card>
				</div>
			</div>
			<section>
				<div className="detailsEvent">
					<div className="row justify-content-between align-items-start">
						<div className="cardEvent col-md-6">
							<img src="" img="" imgLabel="" title="" description="photo of event" />

						</div>
						<div className="resumeEvent col-md-2 mt-4">
							<card>
								<i className="fa fa-clock fa-2x m-2" aria-hidden="true"></i>
								<p>{store.events[index]?.day}</p>
								<p>{store.events[index]?.time}</p>
								<p>{store.events[index]?.content}</p>
							</card>
						</div>
					</div>
					<article className="details">
						<h3>Detalles</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas beatae maxime maiores laudantium a
							ut. Asperiores perferendis saepe sit quo.
						</p>
						<p>{store.events[index]?.content}</p>
					</article>
				</div>
			</section>
		</>
	);
};