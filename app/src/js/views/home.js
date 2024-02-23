import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Profile } from "./profile";

//Home is the "Event list"
export const Home = () => {
	const { store } = useContext(Context)

	if (store.currentUser) {
		return (
			<>
				<Profile />
			</>
		)
	}
	else {
		return (
			<>
				<div className="text-center align-items-flex-start" style={{ backgroundColor: "rgb(66,66,66)", color: "white" }}>
					<main className="main-section w-100 h-100 p-3 mb-1">
						<h1 style={{ fontSize: "50px" }}>The Meetup Clone</h1>
					</main>
				</div>


			</>
		)
	}

};

