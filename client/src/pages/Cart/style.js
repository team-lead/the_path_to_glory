import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const mobile = '@media screen and (max-width: 375px)';

const CartPageStyles = {
  mainContent: {
    paddingTop: '38px',
    [mobile]: {
      paddingTop: '20px'
    }
  },
  mainContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [mobile]: {
      alignItems: 'center',
      flexDirection: 'column'
    }
  },
  products: {
    display: 'inline-block',
    marginTop: '26px',
    [mobile]: {
      marginTop: '10px'
    }
  },
  keepShoppingBtn: {
    [mobile]: {
      display: 'none'
    }
  },
  summarySettings: {
    position: 'relative',
    bottom: '25px'
  },
  emptyCartMsg: {
    display: 'flex'
  },
  emptyCartMsgIcon: {
    fontSize: '30px'
  },
  emptyCartMsgText: {
    fontFamily: 'Josefin Sans, sans-serif',
    textTransform: 'uppercase',
    marginTop: '8 px',
    marginLeft: '13px',
    fontSize: '25px'
  },
  cartHeading: {
    display: 'none',
    fontFamily: 'Roboto, sans-serif',
    borderBottom: '1px solid black',
    paddingBottom: '7px',
    width: '320px',
    [mobile]: {
      display: 'block'
    }
  }
};

export const { classes } = jss.createStyleSheet(CartPageStyles).attach();
