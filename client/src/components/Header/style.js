import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let headerStyle = {
  header: {
    userSelect: 'none',
    background: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '95px'
  },
  navbarMenu: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "33%"
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
    }
  },
  logoItem: {
    fontFamily: "Sofia, sans",
    color: "#fff",
    fontSize: "56px",
    textDecoration: "none",
    lineHeight: 1.5
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '33%'
  },
  headerActionsItemText: {
    fontFamily: "Josefin Sans",
    color: "#fff",
    display: "inline-block",
    fontSize: "16px",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderBottom: "1px solid #fff"
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
    alignItems: "center"
  },
  searchInput: {
    border: "none",
    display: "inline-block",
    borderBottom: "2px solid #111",
    outline: "none",
    width: "50%",
    paddingBottom: "5px",
    marginBottom: "61px"
  },
  clearSearchBtn: {
    fontSize: "20px",
    display: "inline-block",
    position: "relative",
    bottom: "31px",
    right: "17px"
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
  }
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();
