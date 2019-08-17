import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/MainPage/Header";
import SliderView from "../../components/MainPage/Slider";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <Header />
      <SliderView />
    </>
  );
};

export default MainPage;
