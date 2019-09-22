import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const productListStyle ={

    productListContainer:{
        width: '900px',
        marginLeft: '100px',
        
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

    linkItem:{
        textDecoration: 'none',
        transition: '0.5s',
        color: '#000',

        '&:hover': {
            transform: 'scale(1.01)',
        }
    },

    productItem:{
        fontFamily: "Open Sans",
        margin: '0 0 105px',
        cursor: 'pointer',
        transition: '0.5s',

        '& > p': {
            transition: '0.5s',
        },


        '&:hover > p': {
            marginLeft: '1.5px',
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
        marginTop: '14px',
        color: 'rgba(132, 122, 122, 1)'
    }
}



export const { classes } = jss.createStyleSheet(productListStyle).attach();
