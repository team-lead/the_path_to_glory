import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    width: 250,
    color: '#fff',
  },
  rail: {
    
      color: '#847A7A',
      // opacity: '1',
    

  },
  valueLabel: {
    color: '#fff',
  },

  
});


function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const {rail, root, track, valueLabel} = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={root}>
      <Slider className={`${rail} ${track} ${valueLabel}`}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}