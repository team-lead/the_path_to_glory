import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const containerStyles = {
  container: {
    maxWidth: '1200px',
    marign: '0 auto 0 auto'
  }
};

export const { classes } = jss.createStyleSheet(containerStyles).attach();
