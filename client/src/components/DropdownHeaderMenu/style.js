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
  }
};
export const { classes } = jss.createStyleSheet(dropdownMenuStyle).attach();
