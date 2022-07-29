import React from "react";

const ShowReview = ({ review }) => {
  const { tourName, rateing, img, description, interval } = review;

  return (
    <div class="carousel-item" data-bs-interval={`${interval}`}>
      <div class="d-flex align-items-center justify-content-center">
        <div class="card p-2 w-75 card-redius bg-3fd0d4">
          <div class="card-body">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-testimonial-1.png"
                alt=""
              />
            </div>
            <h5 class="text-center text-primary">{tourName}</h5>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
