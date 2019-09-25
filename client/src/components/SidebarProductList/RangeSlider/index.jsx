import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    width: 250, 
    color: "#fff"
  },
  rail: {
    color: "#847A7A",
    opacity: '1',
  },
  valueLabel: {
    color: "#fff"
  },
  priceDiapazon: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: '18px',
    fontFamily: 'Open Sans',
    marginBottom: '45px'
  },
  '@media (max-width: 768px)':{
    root:{
      color:'black'
    },
    rail:{
      color:'black'
    },
    valueLabel: {
      color: "black"
    },
    priceDiapazon:{
      color:'black',
      fontSize: '16px',
      marginLeft: '50px',
      fontWeight:" normal",
      marginTop: '20px',
      marginBottom: '20px',
    }
  }
});





function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const {rail, root, track, valueLabel,priceDiapazon} = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={root}>
      <p className={priceDiapazon}>{value}</p>
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
