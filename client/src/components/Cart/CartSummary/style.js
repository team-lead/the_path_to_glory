import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const cartSummaryStyles = {
  cartSummary: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '40px 0 40px 40px',
    backgroundColor: '#C4C4C4',
    width: '362px',
    height: '591px'
  },
  header: {
    width: '100%',
    paddingBottom: '77px',
    borderBottom: '1px solid #959595'
  },
  headerHeading: {
    fontFamily: 'Josefin Sans, sans-serif',
    marginBottom: '29px'
  },
  discountText: {
    marginBottom: '7px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '12px'
  },
  discountField: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #959595',
    outline: 'none',
    caretColor: '#959595'
  },
  checkoutBtn: {
    display: 'block',
    marginLeft: '6px',
    backgroundColor: 'black',
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
    fontSize: '18px',
    fontWeight: '300',
    width: '269px',
    height: '57px',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#17202A'
    }
  },
  orderDetails: {
    width: '166px',
    height: '116px',
    fontSize: '14px'
  },
  orderDetailsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: '100',
    width: '100%',
    '&.bold': {
      fontWeight: '900'
    }
  }
};

export const { classes } = jss.createStyleSheet(cartSummaryStyles).attach();
