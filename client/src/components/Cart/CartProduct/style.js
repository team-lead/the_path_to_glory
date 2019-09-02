import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const cartProductStyles = {
  cartProduct: {
    position: 'relative',
    display: 'flex',
    fontFamily: 'Open Sans, sans-serif',
    width: '780px',
    borderBottom: '1px solid #C4C4C4',
    marginBottom: '40px',
    paddingBottom: '40px'
  },
  removeProduct: {
    position: 'absolute',
    bottom: '44px',
    right: '0',
    fontSize: '14px',
    color: '#847A7A',
    borderBottom: '1px solid transparent',
    transition: 'all 0.3s',
    '&:hover': {
      borderBottomColor: '#847A7A',
      cursor: 'pointer'
    }
  },
  productDetails: {
    display: 'inline-block',
    marginLeft: '37px'
  },
  productName: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '26px'
  },
  ref: {
    fontSize: '14px',
    color: '#847A7A',
    marginBottom: '25px',
    textTransform: 'uppercase'
  },
  pruductColor: {
    color: '#847A7A',
    fontSize: '16px',
    marginBottom: '17px'
  },
  productSize: {
    color: '#847A7A',
    fontSize: '16px',
    marginBottom: '17px'
  },
  detailName: {
    display: 'inline-block',
    width: '76px'
  },
  productQuant: {
    color: '#847A7A',
    fontSize: '16px',
    marginBottom: '25px'
  },
  productQuantSelectWrapper: {
    color: 'black',
    fontSize: '18px'
  },
  productQuantSelectBtn: {
    boxSizing: 'border-box',
    fontSize: '18px',
    border: 'none',
    backgroundColor: 'transparent',
    position: 'relative',
    bottom: '1px',
    outline: 'none',
    transition: '0.1s',
    '&:hover': {
      cursor: 'pointer',
      color: 'MEDIUMVIOLETRED'
    },
    '&:active': {
      color: 'green'
    }
  },
  productPrice: {
    marginBottom: '13px'
  },
  TotalProductPrice: {
    fontWeight: '700'
  }
};

export const { classes } = jss.createStyleSheet(cartProductStyles).attach();
