import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let headerStyle = {
  h1: {
    position: 'relative',
    animation: 'SHOW_FROM_LEFT 1s ease-in-out',
    fontFamily: "Josefin Sans",
    fontSize: "3.2vw",
    fontWeight: "bold",
    textDecoration: "none",
    color: "black",
    margin: "3%",
    display: "block",
    paddingTop: "20px"
  },
  navbarMenu: {
    display: "flex",
    margin: "1%",
    animation: 'SHOW_FROM_RIGHT 1s ease-in-out',
    position: 'relative'
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
