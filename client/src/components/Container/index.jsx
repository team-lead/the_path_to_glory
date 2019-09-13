import React from "react";
import { classes } from "./style";

const Container = ({ children, containerStg }) => {
  const { container } = classes;
  return (
    <div className={`${container} ${containerStg ? containerStg : ''}`}>
      {children}
    </div>
  );
};

export default Container;
