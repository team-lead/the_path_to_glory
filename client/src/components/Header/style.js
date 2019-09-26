import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

let headerStyle = {
  header: {
<<<<<<< HEAD
    userSelect: "none",
    background: "#000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "95px",
    },
=======
    userSelect: 'none',
    background: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '11vh'
  },
>>>>>>> develop
  navbarMenu: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '33%'
  },
  navbarMenuItem: {
    fontFamily: 'Josefin Sans',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: 20,
    padding: '16px',
    borderBottom: '1px solid transparent',
    color: '#fff',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  logoItem: {
    fontFamily: 'Sofia, sans',
    color: '#fff',
    fontSize: '56px',
    textDecoration: 'none',
    lineHeight: 1.5
  },
  headerActions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '33%'
  },
  headerActionsItemText: {
    fontFamily: 'Josefin Sans',
    color: '#fff',
    display: 'inline-block',
    fontSize: '16px',
    borderBottom: '1px solid transparent',
    '&:hover': {
      borderBottom: '1px solid #fff'
    }
  },
  headerActionsItemImg: {
    color: '#fff',
    fontSize: '16px',
    paddingRight: '7px'
  },
  search: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    position: 'absolute',
    display: 'flex',
    zIndex: '999',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchInput: {
    border: 'none',
    display: 'inline-block',
    borderBottom: '2px solid #111',
    outline: 'none',
    width: '50%',
    paddingBottom: '5px',
    marginBottom: '61px'
  },
  searchBtn: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#000',
    padding: '18px 85px',
    textDecoration: 'none'
  },
  dropdownMenuItem: {
    textDecoration: 'none',
    color: '#fff',
    fontFamily: 'Open Sans',
    fontSize: '18px',
    marginTop: '29px',
    display: 'block',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  dropdownMenuItemGender: {
    textDecoration: 'underline'
  },
  clearSearchBtn: {
    fontSize: '20px',
    display: 'inline-block',
    position: 'relative',
    bottom: '31px',
    right: '17px'
  },
  searchBlock: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  productItemSearch: {
    height: '200px',
    overflowY: 'auto',
    overflow: 'hidden',
    '&::-webkit-scrollbar': {
      width: 13,
      background: 'white'
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: 15,
      width: 13,
      background: 'black'
    }
  },
  resultCount: {
    fontSize: '20px',
    fontFamily: 'Open Sans',
    marginBottom: '25px'
  }
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();
