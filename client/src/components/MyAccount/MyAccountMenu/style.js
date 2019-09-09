import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let headerStyle = {
  h1: {
    fontFamily: "Josefin Sans",
    fontSize: "3.2vw",
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
    margin: "3%",
  },
  navbarMenu: {
    display: "flex",
    margin: "1%",

  },
  navbarMenuItem: {
    fontFamily: "Josefin Sans",
    textDecoration: "none",
    fontSize: "2.2vw",
    textAlign: "center",
    color: "silver",
    width: "25%",
    margin: "5px",
    lineHeight: "200%",
    borderBottom: "1px solid transparent",

    "&:hover": {
      borderBottom: "1px solid silver"
    },

  },
  selectedItem: {
    color: "black",
    borderBottom: "1px solid silver",
    fontWeight: "bold",
  },
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();