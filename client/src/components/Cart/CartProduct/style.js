import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const cartProductStyles = {
  cartProduct: {
    display: 'block',
    backgroundColor: 'siver',
    width: '500px',
    height: '400px',
    border: '1px solid black'
  }
};

export const { classes } = jss.createStyleSheet(cartProductStyles).attach();
