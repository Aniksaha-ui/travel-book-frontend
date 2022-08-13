import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Home/UpcomeingTour/upcomeing.css";

const ShowTour = (props) => {
  const [show, setShow] = useState(false);
  const { id, name, description, price, availableSeat, img, country } =
    props.tour;
  const navigate = useNavigate();
  const handleShowEvent = (e) => {
    setShow(!show);
  };

  const handleNavigate = (id) => {
    navigate(`/tour/${id}`);
  };
  // console.log(name, description, price, availableSeat, img, country);
  return (
    <div className="col">
      <div className="card p-0 card-redius bg-3fd0d4">
        <div className="d-flex align-items-center justify-content-center">
          <img src={img} className="img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">
            <div className="nav-link" onClick={() => handleNavigate(id)}>
              {name} ({country})
            </div>
          </h5>
          <p>{description.slice(0, 161)}</p>
          <div className="d-flex align-items-center justify-content-center p-3">
            <button className="btn btn-primary text-white">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button className="btn btn-primary text-white ms-2">
              <i className="fa-solid fa-heart"></i>
            </button>
            <button
              className="btn btn-primary ms-3"
              type="button"
              onClick={handleShowEvent}
            >
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>

          {show ? (
            <div className="card ">
              <div className="card-header text-primary text-center">{name}</div>
              <div className="card-body">
                <p className="card-text">
                  <b className="text-primary text-center">availableSeat:</b>{" "}
                  {availableSeat}
                </p>

                <hr />
                <p className="card-text">
                  <b className="text-primary text-center">price:</b> {price}
                </p>
                <hr />
                <p className="card-text">
                  <b className="text-primary text-center">country:</b> {country}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowTour;
