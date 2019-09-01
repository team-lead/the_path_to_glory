import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const cartProductStyles = {
  cartProduct: {
    position: 'relative',
    display: 'block',
    backgroundColor: '#FAFAFA',
    width: '810px',
    height: '400px',
    borderBottom: '1px solid #C4C4C4',
    marginTop: '30px',
    paddingBottom: '40px'
  },
  removeProduct: {
    position: 'absolute',
    bottom: '44px',
    right: '0',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    color: '#847A7A',
    borderBottom: '1px solid transparent',
    transition: 'all 0.3s',
    '&:hover': {
      borderBottomColor: '#847A7A',
      cursor: 'pointer'
    }
  },
  productPic: {
    width: '175px',
    height: '253px'
  }
};

export const { classes } = jss.createStyleSheet(cartProductStyles).attach();
