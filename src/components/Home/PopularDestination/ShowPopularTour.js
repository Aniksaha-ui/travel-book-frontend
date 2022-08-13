import React from "react";

const ShowPopularTour = (props) => {
  const { id, name, img } = props.tour;
  return (
    <div className="col p-3">
      <div class="card bg-info" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <p className="text-white">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowPopularTour;
