import React from "react";
import EventsCard from "./EventsCard";
import "./Events.css";
import Data from "./Events.json";

const EventsDisplay = () => {
  return (
    <div className="events">
      <p className="heading sm-12">Our Events</p>
      {Data && <EventsCard data={Data.Events} />}
    </div>
  );
};

export default EventsDisplay;
