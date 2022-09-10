import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";
import ShowDescription from "./ShowDescription";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import "./description.css";
const Description = () => {
  const { id } = useParams();

  const [user] = useAuthState(auth);
  // console.log(user);
  // console.log(id);

  const [description, setDescription] = useState([]);
  useEffect(() => {
    fetch(`https://stormy-gorge-53796.herokuapp.com/tour/description/${id}`)
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

        <div className="row ">
          <div className="col-lg-7 col-md-8 col-12">
            {description.map((des) => (
              <ShowDescription des={des} key={des._id}></ShowDescription>
            ))}
          </div>
          {user ? (
            <div className=" col-lg-5 col-md-4 col-12">
              {description.map((des) => (
                <BookingForm des={des} key={des._id} />
              ))}
            </div>
          ) : (
            <div className=" col-lg-5 col-md-4 col-12">
              <div className="mt-0 ms-5">
                <div className="card">
                  <div className="card-header">More Information</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fa-solid fa-mobile"></i>&nbsp; 01628781323
                    </h5>
                    <p className="card-text">
                      <i className="fa-solid fa-at"></i> sahaanik1045@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Description;
