import React from "react";

const ShowCart = (props) => {
  console.log(props);
  const { tourName, price, phone, numberOfPerson } = props.c;

  return (
    <div class="card-body bg-light">
      <div className="d-flex align-items-center justify-content-between">
        <h6>{tourName}</h6>
        <h6 className="text-center">{price}</h6>
        <h6>{numberOfPerson}</h6>
        <h6>{price * numberOfPerson}</h6>
      </div>
    </div>
  );
};

export default ShowCart;
