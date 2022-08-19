import React, { useEffect, useState } from "react";
import ShowTour from "../../Shared/ShowTour/ShowTour";

const PopularDestination = () => {
  const [populars, setPopular] = useState([]);
  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div className="mt-5">
      <h3 className="text-dark text-center">
        Popular <span className="text-primary">Destination</span>
      </h3>
      <div className="container-custom p-5 card">
        <div className="mt-2">
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 g-4 g-lg-4">
            {populars.slice(0, 8).map((tour) => (
              <ShowTour tour={tour} key={tour.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
