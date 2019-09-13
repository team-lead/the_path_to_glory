<<<<<<< HEAD
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { red } from "@material-ui/core/colors";
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { red } from '@material-ui/core/colors';
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24

const useStyles = makeStyles({
  root: {
    width: 250, 
    color: "#fff"
  },
  rail: {
    color: "#847A7A"
    // opacity: '1',
  },
  valueLabel: {
    color: "#fff"
  }
});

<<<<<<< HEAD
=======




>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
<<<<<<< HEAD
  const { rail, root, track, valueLabel } = useStyles();
=======
  const {rail, root, track, valueLabel} = useStyles();
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={root}>
<<<<<<< HEAD
      <Slider
        className={`${rail} ${track} ${valueLabel}`}
=======
      <Slider className={`${rail} ${track} ${valueLabel}`}

>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
