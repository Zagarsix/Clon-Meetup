import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Meetup = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let organizador = store.meetups.filter(meet => params.theid == meet.ID)

	return (
		<div className="jumbotron">
			<h1 className="display-4">{organizador[0].name}</h1>	
		</div>
	);
};

Meetup.propTypes = {
	match: PropTypes.object
};
