import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let dropdownMenuStyle = {
  container: {
    width: "100%",
    height: "80%",
    backgroundColor: "#000",
    color: "#fff",
    position: "absolute",
    zIndex: "999"
  },
  categorieTitle: {
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "27px",
    textTransform: "uppercase",
    marginBottom: "68px"
  },
  content: {
    padding: "62px 0 0 74px"
  },
  categories: {
    display: "flex",
    "&>div": {
      marginRight: "15%"
    },
    "&>div:last-child": {
      marginRight: "0"
    }
  }
};
export const { classes } = jss.createStyleSheet(dropdownMenuStyle).attach();
