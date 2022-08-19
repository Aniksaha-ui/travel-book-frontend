import React from "react";
import Banner from "./Banner";
import PopularDestination from "./PopularDestination/PopularDestination";
import Review from "./reviews/Review";
import UpcomeingTour from "./UpcomeingTour/UpcomeingTour";
import "./Home.css";
const Home = () => {
  return (
    <div className="background-custom">
      <Banner></Banner>
      <PopularDestination></PopularDestination>
      <UpcomeingTour></UpcomeingTour>
      <Review></Review>
    </div>
  );
};

export default Home;
