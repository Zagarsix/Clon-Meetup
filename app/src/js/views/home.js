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
					<div className="container d-flex justify-content-between py-1 mt-3" style={{ background: "green" }}>
						<div className="list-group  py-2 h-350 w-450">
							<div className="DateEvent justify-content-start p-2 mb-2" style={{ background: "pink" }}>
								<h1>Hola{item.day}</h1>
							</div>
							<main className="Hour and tittle d-flex" style={{ background: "red" }}>
								<section className="Hour p-1 m-1">
									<h2>7:00 am</h2>
								</section>
								<h5
									key={index}
									className="list-group-item d-flex justify-content-between"
									style={{ background: item.background }}>
									<Link to={"/meetup/" + index} style={{ textDecoration: "none" }}>
										<p>{item.title}</p>
									</Link>
									</h5>
									<h5 key={index}
									className="list-group-item d-flex justify-content-between"
									style={{ background: item.background }}>
									<Link to="/meetup" style={{ textDecoration: "none" }}>
										<p>{item.meetups}</p>
									</Link>
								</h5>
							</main>
						</div>
					</div>
				);
			})}

		</>
	)
};

