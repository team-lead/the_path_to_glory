import React from "react";
import { classes } from "../style";

export default function Sizes(props) {
  return (
    <div className={classes.sizeStyles}>
      <h3 className={`${classes.h3} ${classes.filterType}`}>Size</h3>
      <a href="#" className={classes.sizeHelper}>Size guide</a>

      <ul className={classes.sizes}>
        <li>{props.sizes[0]}</li>
        <li>{props.sizes[1]}</li>
        <li>{props.sizes[2]}</li>
        <li>{props.sizes[3]}</li>
      </ul>
    </div>
  );
}
