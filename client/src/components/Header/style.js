import jss from "jss";
import preset from "jss-preset-default";
import { wrap } from "module";
import { borderTop } from "@material-ui/system";

jss.setup(preset());

let headerStyle = {
  header: {
    userSelect: 'none',
    background: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position:  'relative',
    animation: 'show_header_slowly .8s ease',
    "@media (max-width: 1000px)": {
      flexWrap: "wrap",
      justifyContent: "space-around"

    }
  },
  headerItem: {
    paddingTop: "5px",
    paddingBottom: "5px"
  },
  navbarMenu: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "33%",
    "@media (max-width: 1000px)": {
      order: 3,
      width: "100%",
      justifyContent: 'space-around',
      borderTop: "1px solid white"
    }
  },
  navbarMenuItem: {
    fontFamily: "Josefin Sans",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 20,
    padding: "16px",
    borderBottom: "1px solid transparent",
    color: "#fff",
    "&:hover": {
      textDecoration: "underline"
    },
    "@media (max-width: 600px)": {
      fontSize: "12px",
    }
  },
  logoItem: {
    fontFamily: "Sofia, sans",
    color: "#fff",
    fontSize: "56px",
    textDecoration: "none",
    lineHeight: 1.5,
    "@media (max-width: 1000px)": {
      width: "50%"
    },
    "@media (max-width: 600px)": {
      fontSize: "30px",
    }
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '33%',
    "@media (max-width: 1000px)": {
      width: "50%"

    }
  },
  headerActionsItemText: {
    fontFamily: "Josefin Sans",
    color: "#fff",
    display: "inline-block",
    fontSize: "16px",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderBottom: "1px solid #fff"
    },
    '@media (min-width: 1001px) and (max-width: 1185px)': {
      display: "none"
    },
    '@media (min-width: 801px) and (max-width: 1000px)': {
      display: "inline-block"
    },
    '@media (max-width: 800px)': {
      display: 'none',
    }
  },
  headerActionsItemImg: {
    color: "#fff",
    fontSize: "16px",
    paddingRight: "7px"
  },
  headerActionsItem: {
    position: 'relative'
  },
  
  search: {
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    display: "flex",
    zIndex: "999",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    animation: 'show_sreach_modal_slowly .7s ease'
  },
  searchInput: {
    border: "none",
    display: "inline-block",
    borderBottom: "2px solid #111",
    outline: "none",
    width: "50%",
    paddingBottom: "5px",
    marginBottom: "61px",
    animation: 'search_input_opacity .7s ease'
  },
  clearSearchBtn: {
    fontSize: "20px",
    display: "inline-block",
    position: "relative",
    bottom: "31px",
    right: "17px",
    animation: 'search_input_opacity .7s ease'    
  },
  searchBlock: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  productItemSearch: {
    height: "200px",
    overflowY: "auto",
    overflow: "hidden",
    "&::-webkit-scrollbar": {
      width: 13,
      background: "white"
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: 15,
      width: 13,
      background: "black"
    }
  },
  resultCount: {
    fontSize: '20px', 
    fontFamily: 'Open Sans',
    marginBottom: '25px'
  },
  badge: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Open sans, sans-serif',
    background: 'CRIMSON',
    width: '28px',
    height: '28px',
    padding: '0 3px',
    borderRadius: '50%',
    color: 'white',
    position: 'absolute',
    left: '-21px',
    top: '-18px',
    border: '2px solid black',
    animation: 'show_cart_badge ease-in-out 0.7s'
  }
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();
