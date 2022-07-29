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
        class="carousel carousel-dark slide mt-5 mb-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="d-flex align-items-center justify-content-center">
              <div class="card card-redius w-75 bg-3fd0d4">
                <div class="card-body">
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-testimonial-1.png"
                      alt=""
                    />
                  </div>
                  <h5 class="text-center text-primary">
                    Special title treatment
                  </h5>
                  <p class="card-text">
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
            <ShowReview review={review}></ShowReview>
          ))}
        </div>
        <button
          class="carousel-control-prev mt-2"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Review;
