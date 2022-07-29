import React from "react";
import Banner from "./Banner";
import Review from "./reviews/Review";
import UpcomeingTour from "./UpcomeingTour/UpcomeingTour";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <UpcomeingTour></UpcomeingTour>
      <Review></Review>
    </>
  );
};

export default Home;
