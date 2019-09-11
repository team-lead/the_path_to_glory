import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let headerStyle = {
  h1: {
    fontFamily: "Josefin Sans",
    fontSize: "3.7vw",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
    margin: "3%",
    
  },
  navbarMenu: {
    display: "flex",
    // justifyContent: "flex-start",
    width: "50%",
    margin: "auto",
    marginTop: "5%",
  },
  navbarMenuItem: {
    fontFamily: "Josefin Sans",
    textDecoration: "none",
    fontSize: "1.8vw",
    textAlign: "center",  
    color: "silver",
    width: "50%",
    margin: "1vw",
    lineHeight: "200%",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderBottom: "1px solid silver"
    },
  },
  selectedItem: {
    color: "white",
    borderBottom: "1px solid silver",
    fontWeight: "bold",
  },
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();
