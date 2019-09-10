import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let footerStyle = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    width: "85%",
    margin: "0 auto",
    marginTop: "231px",
    paddingBottom: "122px"
  },
  footerItem: {
    display: "flex",
    flexDirection: "column"
  },
  footerItemTitle: {
    fontFamily: "Josefin Sans",
    fontSize: "24px",
    lineHeight: "24px",
    marginBottom: "35px"
  },
  footerLink: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    lineHeight: "35px",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};
export const { classes } = jss.createStyleSheet(footerStyle).attach();
