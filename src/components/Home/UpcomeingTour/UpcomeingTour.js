import React, { useEffect, useState } from "react";
import ShowTour from "../../Shared/ShowTour/ShowTour";

import "./upcomeing.css";
const UpcomeingTour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://fast-chamber-83056.herokuapp.com/tour/upcomeing")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <>
      <div className="container-custom p-5 card">
        <h3 className="text-primary text-center bg-light p-3">
          Upcomeing Tour
        </h3>
        <div className="mt-2">
          <div className="row  row-cols-lg-4 row-cols-md-3 row-cols-1 g-4 g-lg-4">
            {tours.slice(0, 4).map((tour) => (
              <ShowTour tour={tour} key={tour._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomeingTour;
