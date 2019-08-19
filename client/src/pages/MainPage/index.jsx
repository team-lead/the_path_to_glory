import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/MainPage/Header";
import SliderView from "../../components/MainPage/Slider";
import NewCollections from "../../components/MainPage/NewCollections";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <div style={{ backgroundColor: "#111" }}>
        <Header />
        <SliderView />
        <NewCollections />
      </div>
    </>
  );
};

export default MainPage;
