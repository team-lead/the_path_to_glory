import React from 'react';
import { classes } from './style';

export default function Button(props) {
  let colorBtn = '';
  let btnSettings = '';
  if (props.black) colorBtn = classes.black;
  if (props.white) colorBtn = classes.white;
  if (props.btnSettings) btnSettings = props.btnSettings;
  return (
    <div
      className={`${classes.btn} ${colorBtn} ${btnSettings} `}
      href={props.href}
      onClick={props.clickHandler}>
      {props.name}
    </div>
  );
}
