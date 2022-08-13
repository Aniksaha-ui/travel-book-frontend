import React from "react";
import Banner from "./Banner";
import PopularDestination from "./PopularDestination/PopularDestination";
import Review from "./reviews/Review";
import UpcomeingTour from "./UpcomeingTour/UpcomeingTour";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <PopularDestination></PopularDestination>
      <UpcomeingTour></UpcomeingTour>
      <Review></Review>
    </>
  );
};

export default Home;
