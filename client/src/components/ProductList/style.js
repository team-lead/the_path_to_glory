import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const productListStyle ={
    productListContainer:{
        width: '800px',
        marginLeft: '400px',
    },
    
    productList:{
        marginTop: '22px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    categoryName:{
        fontSize: '24px',
        marginTop: '80px',
    },

    productItem:{
        fontFamily: "Open Sans",
        marginBottom: '105px',
        cursor: 'pointer',  
        "&:hover":{
            transform: 'scale(1.01)'
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
