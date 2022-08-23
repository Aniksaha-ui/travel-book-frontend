import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Home/UpcomeingTour/upcomeing.css";
import "./ShowTour.css";
const ShowTour = (props) => {
  const {
    _id,
    name,
    starting_date,
    shortDescription,
    availableSeat,
    img,
    country,
  } = props.tour;
  const navigate = useNavigate();

  const handleNavigate = (_id) => {
    navigate(`/tour/${_id}`);
  };

  return (
    <div className="col">
      <div className="card p-0 bg-3fd0d4 border-0">
        <div className="d-flex align-items-center justify-content-center">
          <img src={img} className="img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title ">
            <div
              className="nav-link text-dark"
              onClick={() => handleNavigate(_id)}
            >
              {name} ({country})
            </div>
          </h5>
          <p className="nav-link text-dark margin-top-3">{shortDescription}</p>
          <div className="d-flex algin-items-center justify-content-between">
            <span className="ms-3 margin-top-1">
              <i className="fa-solid fa-chair"></i>
              {availableSeat}
            </span>
            <span className="margin-top-1">
              <i className="fa-solid fa-person-seat-reclined"></i>{" "}
              {starting_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTour;
