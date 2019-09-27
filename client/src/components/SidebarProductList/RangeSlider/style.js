import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());
let PriceStyle ={
    priceNum:{
        color:"white",
        fontFamily: "Arial",
        fontSize: "18px"
    },
    '@media (max-width: 768px)':{
        priceNum:{
            color:'black',
        },
        priceContainer:{
            marginLeft: '50px',
            marginTop: '20px',
        },
    }
}
export const { classes } = jss.createStyleSheet(PriceStyle).attach();