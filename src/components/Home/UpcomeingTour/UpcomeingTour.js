import React, { useEffect, useState } from "react";
import ShowUpcomeingTour from "./ShowUpcomeingTour";
import "./upcomeing.css";
const UpcomeingTour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("upcomeingtour.json")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <>
      <h3 className="text-primary text-center bg-light p-3">Upcomeing Tour</h3>
      <div className="container-custom px-3">
        <div className="mt-2">
          <div class="row  row-cols-lg-3 row-cols-md-3 row-cols-1 g-1 g-lg-2">
            {tours.map((tour) => (
              <ShowUpcomeingTour tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomeingTour;
