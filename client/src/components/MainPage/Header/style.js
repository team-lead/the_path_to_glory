import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let headerStyle = {
  header: {
    background: "#000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "10vh"
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
    borderBottom: "1px solid transparent",
    color: "#fff",
    "&:hover": {
      borderBottom: "1px solid #fff"
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
    display: "flex",
    justifyContent: "space-around",
    width: "33%"
  },
  headerActionsItemText: {
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
    display: "block",
    borderBottom: "2px solid #111",
    outline: "none",
    width: "50%",
    paddingBottom: "5px",
    marginBottom: "61px"
  },
  searchBtn: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#000",
    padding: "18px 85px",
    textDecoration: "none"
  }
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();
