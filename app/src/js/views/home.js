import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

//Home is the "Event list"
export const Home = () => {
	const { store } = useContext(Context)
	return (
		<>

			<div className="text-center" style={{ backgroundColor: "rgb(66,66,66)", color:"white"}}>
				<main className="main-section w-100 h-100 p-3 mb-1">
					<h1>The Meetup Clone</h1>
					<h3>This is a mini project created by <a href="https://4geeksacademy.com" className="text-primary" style={{textDecoration:"none"}}> 4GeeksAcademy</a></h3>
					<h6>Using: ReactJS, Bootstrap, @Fortawesome, Moment, React-router </h6>
					{store.prueba}
				</main>

			</div>
			<div className="container d-flex justify-content-between align-items-center py-1" style={{background:"green"}}>
				<div className="DateEvent justify-content-start" style={{background:"pink"}}>
					<h1>April 28</h1>
				</div>
				<div className="Hour and tittle d-flex" style={{background:"red"}}>
					<div className="Hour">
						<h2>7:00 am</h2>
					</div>
					<div className="ml-auto">
						<Link to="/events" style={{textDecoration:"none"}}>
							<p>5th Event for meetup 1</p>
						</Link>
						<Link to="/meetup" style={{textDecoration:"none"}}>
							<p>Meetup 1</p>
						</Link>
					</div>
				</div>

			</div>
		</>
	)
};
