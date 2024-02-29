import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Meetup = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let organizador = store.meetups.filter(meet => params.theid == meet.ID)
	
	const getMeetup = (id) => {
		let organizador = store.meetups.filter(meet => id == meet.ID)
		return organizador[0]
	}
	// let eventsOnlyMeetups = store.events.filter(meet => params.theid == meet.ID)
	
	// const viewEventsOnly =()=>{
	// 	let eventsOnlyMeetups =store.events.filter(meet => id == meet.ID)
	// }
	
	return (
		<>
			<div className="d-flex justify-content-between" style={{ backgroundColor: "rgb(66,66,66)", color: "white" }}>
				<div className="cardMeetup">
					<img src="" img="" imglabel="" title="" description="" />
				</div>
				<div className="nameMeetup">
					<h1 className="display-5 p-2 mx-2">{organizador[0].name}</h1>
					{/* <p>Ubicación</p>
					<p>{ubicacion[0].location}</p> */}
				</div>

			</div>
			<p className="d-flex justify-content-center" style={{ fontSize: "30px" }}>Próximos eventos</p>
					
			{store.events.map((item, index) => {
				return (
					<section className="container d-flex justify-content-between py-1 mt-2" key={index}>
						<div className="list-group-item">
							<div className="dateEvent" style={{ background: "rgb(228, 228, 228)", width: "100%" }}>
								<h1>{item.day}</h1>
							</div>
							<div className="second d-flex justify-content-between my-3">
								<h2 className="hour">
									{item.time}
								</h2>
								<div className="eventAndMeetup">
									<p className="px-3 mx-3" style={{ fontSize: "20px" }}>
										<Link to={"/events/" + index} style={{ textDecoration: "none" }}>
											{item.title}
										</Link>
									</p>
									<p className="px-3 mx-3">
										<Link to={"/meetup/" + getMeetup(item.meetup).ID} style={{ textDecoration: "none" }}>
											{getMeetup(item.meetup).name}
										</Link>
									</p>
								</div>
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
};


