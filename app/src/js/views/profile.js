import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Profile = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.loadProfile();
    }, []);

    // If user is not signed in, redirect to login
    useEffect(() => {
        if (store.currentUser === null) navigate("/login");
    }, [store.currentUser]);

    const getMeetup = (id) => {
        let organizador = store.meetups.filter(meet => id == meet.ID)
        return organizador[0]
    }

return (
    <>
    {store.events.map((item, index) => {
            //item representa cada elemento del array. Index indica la posición de cada elemento.
            return (
                <div className="container d-flex justify-content-between py-1 mt-2" key={index}>
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
                </div>
            );
        })
    }
</>
)
}