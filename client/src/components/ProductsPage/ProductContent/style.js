import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let LeftSideMenuStyle = {
  leftMenu: {
    width: '335px',
    paddingLeft: '72px',
    background: '#000',
  },
  main:{
    display: 'flex',
  },

};
export const { classes } = jss.createStyleSheet(LeftSideMenuStyle).attach();