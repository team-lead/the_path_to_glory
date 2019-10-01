import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import DetailPageComponent from "../../components/DetailPage";

export default function DetailPage(props) {
  return (
    <Fragment>
      <Helmet>
        <title>Goods detail</title>
      </Helmet>
      <DetailPageComponent />
    </Fragment>
  );
}
