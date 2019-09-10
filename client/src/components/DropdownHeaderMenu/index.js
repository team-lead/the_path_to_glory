import React, { Fragment } from "react";
import { classes } from "./style";

const DropdownHeaderMenu = props => {
  const { title, children } = props;
  const { container, categorieTitle, content, categories } = classes;
  return (
    <Fragment>
      <div className={container} {...props}>
        <div className={content}>
          <h3 className={categorieTitle}>{title}</h3>
         <div className={categories}>
           {children}
         </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DropdownHeaderMenu;
