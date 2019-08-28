import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const CartPageStyles = {
  products: {
    display: 'inline-block'
  }
};

export const { classes } = jss.createStyleSheet(CartPageStyles).attach();
