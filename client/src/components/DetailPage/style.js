import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

let detailPageStyle = {
    container: {
        fontFamily: 'Open Sans',
        width: '1266px',
        margin: '0 auto',
        marginTop: '19px',
        marginBottom: '10px'
    },

    h3: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000'
    },

    linksNavs: {
        display: 'flex',
        justifyContent: 'space-between',
        
        '& > a': {
            fontFamily: 'Josefin Sans',
            textDecoration: 'none',
            color: '#000',
            transition: 'all 1s ease',
            fontSize: '14px',

            '&:hover': {
                textDecoration: 'underline',
            }
        },
    },
    
    liStyle: {
        display: 'flex',
        marginTop: '66px'
    },

    imageParams: {
        display: 'flex',
        
        '& > img': {
            width: '416px',
            height: '603px',
            marginRight: '12px',

            '&:last-child': {
                marginRight: '0'
            }
        } 
    },

    containerInfo: {
        position: 'relative',
        width: '391px',
        marginLeft: '31px',
        height: '603px',
    },

    headerInfoText: {
        display: 'flex',
        justifyContent: 'space-between',

        '& > h2': {
            fontWeight: 'bold',
            fontSize: '24px',
            textTransform: 'uppercase',
        }
    },

    refStyle: {
        color: '#847A7A',
        marginTop: '9px',
        marginBottom: '50px'
    },

    colorsDiv: {
        display: 'flex',
        textAlign: 'center',

        '& > div': {
            marginTop: '17px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',

            '&:first-child': {
                background: '#000',
                marginRight: '54px'
            },

            '&:last-child': {
                background: '#8E521B',

                '& span': {
                    right: '4px'
                }
            },

            '& > span': {
                position: 'relative',
                top: '40px',
                fontSize: '14px'
            }
        }
    },

    sizeStyles: {
        marginTop: '72px',
        

        '& > ul': {
            display: 'flex',
            marginTop: '35px',
            
            '& > li': {
                marginRight: '35px',
                cursor: 'pointer',
            }
        }
    },

    active: {
        '&:after': {
            content: '""',
            display: 'block',
            height: '1px',
            width: '11px',
            background: '#000',
            position: 'relative',
            top: '1px',
            right: '1px'
        }
    },

    sizeGuide: {
        marginTop: '20px',
        marginBottom: '44px',

        '& > a': {
            color: '#847A7A',
            fontSize: '12px',
            textDecoration: 'none',
            paddingBottom: '20px',

            '&:after': {
                content: '""',
                display: 'block',
                height: '1px',
                width: '56px',
                background: '#847A7A',
                marginTop: '2px'
            }
              
        }
    },

    description: {

        '& > p': {
            fontSize: '12px',
            lineHeight: '16px',
            textAlign: 'left',

            '&:nth-child(2)': {
                marginTop: '14px'
            },

            '&:last-child': {
                marginTop: '12px'
            }
        }   
    },

    btnSettings: {
        position: 'absolute',
        bottom: '0'
    }
};
export const { classes } = jss.createStyleSheet(detailPageStyle).attach();