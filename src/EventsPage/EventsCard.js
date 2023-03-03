import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const EventsCard = ({ data }) => {
  return (
    <div>
      <div className="carousel-wrapper">
        <Carousel
          autoPlay={true}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          swipeScrollTolerance={true}
          thumbWidth="20%"
          className="events-carousal"
        >
          {data.map((data) => (
            <div class="card flex-row events-card">
              <img
                src={data.poster}
                class="card-img-left example-card-img-responsive events-img"
                alt="test"
              />
              <div class="card-body events-details">
                <h4 class="events-title">{data.title}</h4>
                <br></br>

                <p class="events-description">{data.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EventsCard;
