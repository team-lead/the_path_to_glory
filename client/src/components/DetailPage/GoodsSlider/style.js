import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const goodsSlider = {
    slider: {
        width: '415px',

        '& > ul.slick-dots ': {
            position: 'relative',
            bottom: '30px'
        }
    },

    imageSize: {
        height: '603px',
        width: '415px'
    }
}

export const { classes } = jss.createStyleSheet(goodsSlider).attach();
