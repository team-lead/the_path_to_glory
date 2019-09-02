import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let ProductsFilterStyle = {
  categorySection: {
    marginTop: '16px',
    marginBottom: '18px',
  },

  sectionTitle: {
    fontFamily: 'Josefin Sans',
    fontWeight: 'bold',
    fontSize: '18px',
    textTransform: 'uppercase',
    color: '#fff'
  },

  categorySectionTitle: {
    paddingTop: '14px',
    paddingBottom: '14px',
  },

  sectionItem: {
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-block',
    paddingTop: '2px',
    paddingBottom: '2px',
    fontFamily: 'Open Sans',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  
  categorySectionItem: {
    borderBottom: '1px solid transparent',
    marginTop: '19px',
    marginBottom: '19px',
    '&:hover':{
      borderBottom: '1px solid #fff',
    },
  },

  colorSection: {
    marginTop: '18px',
  } ,

  colorSectionTitle: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },

  colorSectionItem: {
    marginLeft: '29px',
    borderBottom: '1px solid transparent',
    marginTop: '15px',
    marginBottom: '15px',
    '&:hover':{
      borderBottom: '1px solid #fff',
    },
  },

  colorCircle: {
    display: 'inline-block',
    borderRadius: '50%',
    width: '21px',
    height: '21px',
    '&.black': {
      width: '20px',
      height: '20px',
      border: '1px solid #847A7A',
      backgroundColor: '#0C0C0C',
    },
    '&.brown': {
      backgroundColor: '#8E521B',
    },
    '&.red': {
      backgroundColor: '#F22121',
    },
    '&.white': {
      backgroundColor: '#fff',
    },
  },
  
  colorItem: {
    display: 'flex',
    alignItems: 'center'
  },

  priceSection: {
    marginTop: '68px',
  },

  priceSectionTitle: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },

  priceDiapazon: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: '18px',
    fontFamily: 'Open Sans',
    marginBottom: '45px'
  },



  




}
export const { classes } = jss.createStyleSheet(ProductsFilterStyle).attach();