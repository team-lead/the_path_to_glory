import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/MainPage/Header";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <Header />
    </>
  );
};

export default MainPage;
