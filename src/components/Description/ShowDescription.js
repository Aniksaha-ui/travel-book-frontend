import React from "react";

const ShowDescription = (props) => {
  // console.log(props);
  const {
    availableSeat,
    country,
    departure,
    departureTime,
    description,
    duration,
    end_date,
    img,
    include,
    name,
    notInclude,
    price,
    shortDescription,
    starting_date,
    status,
  } = props.des;
  console.log(availableSeat);
  // console.log(availableSeat);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <img
          className="img-fluid"
          src="https://duruthemes.com/demo/html/travol/img/tours/france1.jpg"
          alt=""
        />
      </div>
      <hr />
      <div className="row mt-4">
        <div className="col-md-3">
          <i className="fa-solid fa-clock"></i>
          &nbsp;{duration}
        </div>
        <div className="col-md-3">
          <i className="fa-solid fa-calendar"></i> &nbsp; {starting_date}
        </div>
        <div className="col-md-3">
          <i className="fa-solid fa-calendar-days"></i> &nbsp;{end_date}
        </div>
        <div className="col-md-3">
          <i className="fa-solid fa-chair"></i>&nbsp;{availableSeat}
        </div>
      </div>
      <hr />

      {/* description  */}
      <p>{description}</p>
      {/* description end */}

      <div className="mt-5">
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <p>Departure</p>
          <p className="ms-lg-0 ms-3">{departure}</p>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <p>Departure Time</p>
          <p className="ms-lg-0 ms-3">Please arrive by {departureTime} AM</p>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <p>Return Date</p>
          <p className="ms-lg-0 ms-3">{end_date}</p>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <p>Include</p>
          <ul>
            {include.map((inc) => {
              return <li>{inc}</li>;
            })}
          </ul>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <p>Not Include</p>

          <ul>
            {notInclude.map((notInc) => {
              return <li>{notInc}</li>;
            })}
          </ul>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <p>price</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default ShowDescription;
