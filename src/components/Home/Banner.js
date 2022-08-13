import React, { useEffect, useState } from "react";

const Banner = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-7 col-md-12 col-12">
          <h3 className="text-primary text-center">
            Want a chill tour? Contact with Travel Book
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            veniam dicta saepe atque id praesentium voluptatem eos distinctio?
            Accusantium, ad! Et veniam eius dicta ipsum placeat nisi perferendis
            suscipit numquam, laborum sit quisquam cumque nihil nulla ab
            voluptates voluptate consequuntur. Recusandae in ipsum alias quasi
            voluptatum vero similique eum minus nulla necessitatibus,
            laudantium, quibusdam incidunt odio fugiat quidem maiores,
            consequuntur cum vel aliquid expedita illum modi. Itaque qui non
            laboriosam maiores, sit ut minima quisquam optio recusandae aliquam
            numquam! Vero fugit tempora eligendi maxime deleniti, beatae,
            eveniet ex laboriosam blanditiis, at eaque porro illo mollitia
            debitis placeat iusto? Voluptatum, eius?
          </p>
        </div>
        <div className="col-lg-5 col-md-12 col-12">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
            className="d-block w-100"
            alt="Canyon at Nigh"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
