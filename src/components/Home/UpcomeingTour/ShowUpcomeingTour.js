import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./upcomeing.css";
const ShowUpcomeingTour = (props) => {
  // console.log(props);
  const [show, setShow] = useState(false);
  const { name, description, price, availableSeat, img, country } = props.tour;
  const handleShowEvent = (e) => {
    setShow(!show);
  };
  // console.log(name, description, price, availableSeat, img, country);
  return (
    <div class="col">
      <div class="card p-0 card-redius bg-3fd0d4">
        <div className="d-flex align-items-center justify-content-center">
          <img src={img} class="img-fluid" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">
            <Link className="nav-link" to="/">
              {name} ({country})
            </Link>
          </h5>
          <p>{description.slice(0, 161)}</p>
          <div className="d-flex align-items-center justify-content-center  p-3">
            <button className="btn btn-primary text-white">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button className="btn btn-primary text-white ms-2">
              <i class="fa-solid fa-heart"></i>
            </button>
            <button
              class="btn btn-primary ms-3"
              type="button"
              onClick={handleShowEvent}
            >
              <i class="fa-solid fa-caret-down"></i>
            </button>
          </div>

          {show ? (
            <div class="card ">
              <div class="card-header text-primary text-center">{name}</div>
              <div class="card-body">
                <p class="card-text">
                  <b className="text-primary text-center">availableSeat:</b>{" "}
                  {availableSeat}
                </p>

                <hr />
                <p class="card-text">
                  <b className="text-primary text-center">price:</b> {price}
                </p>
                <hr />
                <p class="card-text">
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

export default ShowUpcomeingTour;
