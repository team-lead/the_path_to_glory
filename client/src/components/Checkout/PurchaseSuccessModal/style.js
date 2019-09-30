import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const small = '@media screen and (max-width: 790px)';

const PurchaseSuccessModalStyles = {
  modal: {
    width: '500px',
    height: '300px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '30%',
    left: '33%',
    padding: '10px'
  },
  text: {
    color: 'white',
    fontSize: '30px'
  },
  modalContainer: {
    fontFamily: 'Josefin Sans, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  closeBtn: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

export const { classes } = jss.createStyleSheet(PurchaseSuccessModalStyles).attach();
