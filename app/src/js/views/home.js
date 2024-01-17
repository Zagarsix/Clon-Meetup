import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//Home is the "Event list"
export const Home = () => {
	const { store, actions } = useContext(Context);

	const getMeetup = (id) => {
		let organizador = store.meetups.filter(meet => id == meet.ID)
		return organizador[0]
	}

	// const ordenCronologico =() =>{

	// }

	return (
		<>
			<div className="text-center align-items-flex-start" style={{ backgroundColor: "rgb(66,66,66)", color: "white" }}>
				<main className="main-section w-100 h-100 p-3 mb-1">
					<h1 style={{ fontSize: "50px" }}>The Meetup Clone</h1>
				</main>
			</div>

			{store.events.map((item, index) => {
				//item representa cada elemento del array. Index indica la posición de cada elemento.
				return (
					<div className="container d-flex justify-content-between py-1 mt-2">
						<div className="list-group-item">
							<div className="dateEvent" style={{background:"rgb(228, 228, 228)", width:"100%"}}>
								<h1>{item.day}</h1>
							</div>
							<div className="second d-flex justify-content-between my-3">
								<h2 className="hour">
									{item.time}
								</h2>
								<div className="eventAndMeetup">
									<p className="px-3 mx-3" style={{fontSize:"20px"}}>
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
					</div>
				);
			})}
		</>
	)
};

