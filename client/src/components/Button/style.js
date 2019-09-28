import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

let button = {
  btn: {
    fontFamily: 'Open sans, sans-serif',
    textDecoration: 'none',
    textTransform: 'uppercase',
    display: 'inline-block',
    width: '269px',
    border: '1px solid',
    borderColor: 'transparent',
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '16px 0',
    transition: '0.3s',
    cursor: 'pointer'
  },
  black: {
    background: '#000',
    color: '#fff',

    '&:hover': {
      background: '#fff',
      color: '#000',
      borderColor: '#000'
    }
  },
  white: {
    background: '#fff',
    color: '#000',

    '&:hover': {
      background: '#000',
      color: '#fff',
      borderColor: '#000'
    }
  }
};

export const { classes } = jss.createStyleSheet(button).attach();
