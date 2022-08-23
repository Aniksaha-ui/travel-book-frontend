import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";
import ShowDescription from "./ShowDescription";

const Description = () => {
  const { id } = useParams();
  // console.log(id);

  const [description, setDescription] = useState([]);
  useEffect(() => {
    fetch(`https://fast-chamber-83056.herokuapp.com/tour/description/${id}`)
      .then((res) => res.json())
      .then((data) => setDescription(data));
  }, []);

  return (
    <>
      <div className=" card p-lg-5 p-md-5 p-3 container mt-5">
        {description.map((des) => (
          <h3 className="text-center text-primary" key={des._id}>
            {des.name}
          </h3>
        ))}
        <div className="row">
          <div className="col-lg-7 col-md-8 col-12">
            {description.map((des) => (
              <ShowDescription des={des} key={des._id}></ShowDescription>
            ))}
          </div>
          <div className=" col-lg-5 col-md-4 col-12">
            {description.map((des) => (
              <BookingForm des={des} key={des._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
