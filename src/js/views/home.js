import React from "react";

import "../../styles/home.css";

//Home is the "Event list"
export const Home = () => (
	<>
		<div className="text-center mt-5">
			<main className="main-section w-100 h-100 p-3 mb-5">
				<h1>The Meetup Clone</h1>
				<h3>This is a mini project created by <span className="text-primary"> 4GeeksAcademy</span></h3>
				<h6>Using: ReactJS, Bootstrap, @Fortawesome, Moment, React-router </h6>
			</main>


		</div>
		{/* <div>
		<div className="ml-auto">
				<Link to="/events">
					<p>5th Event for meetup 1</p>
				</Link>
				<Link to="/meetup">
					<p>Meetup 1</p>
				</Link>
			</div>

		</div> */}
	</>
);
