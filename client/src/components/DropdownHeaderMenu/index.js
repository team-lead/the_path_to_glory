import React, { Fragment } from "react";
import { classes } from "./style";

const DropdownHeaderMenu = ({ title, children }) => {
  const { container } = classes;
  return (
    <Fragment>
      <div className={`${container} manDropdown`}>{children}</div>
    </Fragment>
  );
};

export default DropdownHeaderMenu;
