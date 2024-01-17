import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Meetup = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let organizador = store.meetups.filter(meet => params.theid == meet.ID)

	return (
		<div className="detailsMeetup d-flex justify-content-around" style={{ backgroundColor: "rgb(66,66,66)", color: "white" }}>
			<div className="cardMeetup">
				<img>
				</img>
			</div>
			<h1 className="display-4">{organizador[0].name}</h1>
		</div>
	);
};


