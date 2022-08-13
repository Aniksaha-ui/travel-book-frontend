import React, { useEffect, useState } from "react";
import ShowPopularTour from "./ShowPopularTour";

const PopularDestination = () => {
  const [populars, setPopular] = useState([]);
  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-dark text-center">
        Popular <span className="text-primary">Destination</span>
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1 g-lg-1 g-1">
          {populars.slice(0, 8).map((popular) => (
            <ShowPopularTour tour={popular} key={popular.id}></ShowPopularTour>
          ))}
        </div>
      </h3>
    </div>
  );
};

export default PopularDestination;
