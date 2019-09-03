import React from 'react';
import { classes } from './style';

export default function Button(props) {
  {
    let colorBtn = '';
    let btnSettings = '';
    if (props.black) colorBtn = classes.black;
    if (props.white) colorBtn = classes.white;
    if (props.btnSettings) btnSettings = props.btnSettings;
    return (
      <a
        href={props.href}
        className={`${classes.btn} ${colorBtn} ${btnSettings} `}>
        {props.name}
      </a>
    );
  }
}
