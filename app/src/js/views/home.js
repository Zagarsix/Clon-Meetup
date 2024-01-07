import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//Home is the "Event list"
export const Home = () => {
	const { store } = useContext(Context)
	return (
		<>

			<div className="text-center" style={{ backgroundColor: "rgb(66,66,66)", color: "white" }}>
				<main className="main-section w-100 h-100 p-3 mb-1">
					<h1>The Meetup Clone</h1>
					<h5>This is a mini project created by <a href="https://4geeksacademy.com" className="text-primary" style={{ textDecoration: "none" }}> 4GeeksAcademy</a></h5>
					<p>Using: ReactJS, Bootstrap, @Fortawesome, Moment, React-router </p>
				</main>
			</div>

			{store.events.map((item, index) => {
				return (
					<div className="container d-flex justify-content-between py-2 mt-2">
						<div className="list-group-item  py-2">
							<div className="dateEvent">
								<h1>{item.day}</h1>
							</div>
							<div className="Hour and tittle d-flex align-items-end my-3">
								<h2 className="Hour px-1 mx-2">
									{item.time}
								</h2>
								<h5
									className=" px-2 mx-5">
									<Link to={"/events"} style={{ textDecoration: "none" }}>
										{item.title}
									</Link>
								</h5>

								{store.meetups.map((item, index) => {
									<h5 key={index}
										className="list-group-item">
										<Link to="/meetup" style={{ textDecoration: "none" }}>
											{item.name}
										</Link>
									</h5>
								})}
								
							</div>
						</div>
					</div>
				);
			})}

		</>
	)
};

