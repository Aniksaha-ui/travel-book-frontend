import React, { useEffect, useState } from "react";
import ShowReview from "./ShowReview";

const Review = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <>
      <h3 className="text-center text-primary bg-light">Reviews</h3>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide mt-5 mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="d-flex align-items-center justify-content-center">
              <div className="card card-redius w-75 bg-3fd0d4">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-testimonial-1.png"
                      alt=""
                    />
                  </div>
                  <h5 className="text-center text-primary">
                    Special title treatment
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam illo dolorum deserunt ipsa necessitatibus delectus,
                    iure ex. Consequuntur, harum non? Fugit repellendus quis
                    maxime qui placeat nostrum debitis sunt quo natus
                    dignissimos. Ipsa ut, officiis a minima non sint magni
                    praesentium libero nostrum iure laudantium doloribus
                    corporis quisquam dolorum excepturi!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {reviews.map((review) => (
            <ShowReview key={review.id} review={review}></ShowReview>
          ))}
        </div>
        <button
          className="carousel-control-prev mt-2"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Review;
