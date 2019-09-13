import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let headerStyle = {
  // "@media (min-width: 320px)": {
  //   header: {
  //     userSelect: "none",
  //     background: "#000",
  //     width: "100%",
  //     paddingBottom: "14px",
  //     paddingTop: "14px"
  //   },
  //   containerStg: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     alignItems: "center"
  //   },
  //   navbarMenu: {
  //     display: "flex",
  //     justifyContent: "space-evenly",
  //     alignItems: "center",
  //     width: "33%"
  //   },
  //   navbarMenuItem: {},
  //   logoItem: {},
  //   headerActions: {},
  //   headerActionsItemText: {},
  //   headerActionsItemImg: {},
  //   search: {},
  //   searchInput: {},
  //   searchBtn: {},
  //   dropdownMenuItem: {},
  //   dropdownMenuItemGender: {}
  // }
  // "@media (min-width: 1266px)": {
  header: {
    userSelect: "none",
    background: "#000",
    width: "100%",
    paddingBottom: "18px",
    paddingTop: "18px"
  },
  containerStg: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
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
      // borderBottom: "1px solid #fff"
      textDecoration: "underline"
    },
    "&.active": {
      textDecoration: "underline"
    }
  },
  logoItem: {
    fontFamily: "Sofia, sans",
    color: "#fff",
    fontSize: "56px",
    textDecoration: "none"
  },
  headerActions: {
    display: "flex",
    justifyContent: "space-around",
    width: "33%"
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
  search: {
    width: "100%",
    height: "514px",
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
  },
  dropdownMenuItem: {
    textDecoration: "none",
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: "18px",
    marginTop: "29px",
    display: "block",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  dropdownMenuItemGender: {
    textDecoration: "underline"
  }
  // }
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();
