import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let Register = {
  wrapper: {
   heithg: "100vh",
    backgroundColor: "black"
  },
  

}

export const { classes } = jss.createStyleSheet(Register).attach();
