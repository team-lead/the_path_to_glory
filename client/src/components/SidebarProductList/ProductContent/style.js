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
  '@media (max-width: 576px)':{
    leftMenu:{
      display: 'none'
    }
  }

};
export const { classes } = jss.createStyleSheet(LeftSideMenuStyle).attach();