import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const productListStyle ={

    productListContainer:{
        width: '900px',
        marginLeft: '35px',
        
    },
    
    productList:{
        marginTop: '22px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },

    categoryName:{
        fontSize: '24px',
        marginTop: '80px',
    },

    productItem:{
        fontFamily: "Open Sans",
        margin: '0 5px 105px',

        cursor: 'pointer',
        "&:hover":{
            // transform: 'scale(1.01)',
            boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.42)',

        }
    },

    itemImg:{
        height: '475px',
        width: '370px',
    },

    goodsTitle:{
        textTransform: 'uppercase',
        fontSize: '18px',
        marginTop: '20px',
    },
    goodsPrise:{
        marginTop: '15px',
        color: 'rgba(132, 122, 122, 1)'
    }
}



export const { classes } = jss.createStyleSheet(productListStyle).attach();
