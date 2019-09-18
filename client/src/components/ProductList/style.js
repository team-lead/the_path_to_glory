import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const productListStyle ={
    productListContainer:{
        width: '900px',
        marginLeft: '100px',
    },
    filter:{
        display: 'none',
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
        height: '390px',
        width: '270px',
        fontFamily: "Open Sans",
        margin: '0 0 105px',
        cursor: 'pointer',
    },
    itemImg:{
        width: '100%',
        height: 'auto',
    },
    goodsTitle:{
        textTransform: 'uppercase',
        fontSize: '18px',
        marginTop: '20px',
        color: '#000000',
    },
    goodsPrise:{
        marginTop: '15px',
        color: 'rgba(132, 122, 122, 1)'
    },

    '@media (max-width: 576px)':{
        productListContainer:{
            width: '100vh',
            marginLeft: '0',
        },
        goodsTitle:{
            marginTop: '5px',
            fontSize: '12px',
            lineHeight: '16px',
        },
        goodsPrise:{
            fontSize: '12px',
            marginTop: '5px',
            
        },
        productList:{
            margin: '0 auto',
            justifyContent: 'space-around',
        },
        linkItem:{
            width: '35%',
            height: 'auto',
            margin: '35px 0 0',
        },
        categoryName:{
            display: 'none',
        },
        filter:{
            display: 'block',
            fontSize:'16px',
            marginTop: '19px',
            marginLeft: '30px',
        },
    }

}



export const { classes } = jss.createStyleSheet(productListStyle).attach();
