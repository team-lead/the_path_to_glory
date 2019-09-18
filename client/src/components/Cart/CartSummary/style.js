import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const cartSummaryStyles = {
  summaryContainer: {
    display: 'inline-block',
    verticalAlign: 'top'
  },
  cartSummary: {
    display: 'inline-block',
    boxSizing: 'border-box',
    position: 'relative',
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
    position: 'absolute',
    bottom: '40px'
  },
  orderDetails: {
    marginTop: '50px',
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
