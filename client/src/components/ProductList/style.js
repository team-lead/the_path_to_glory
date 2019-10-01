import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const productListStyle = {
  productListContainer: {
    width: "100%"
  },
  filter: {
    display: "none"
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  categoryName: {
    fontSize: "24px",
    marginTop: "80px",
    marginLeft: "7%"
  },
  linkItem: {
    position: 'relative',
    textDecoration: "none",
    color: "#000",
    animation: 'showImages ease-in-out',
    animationDuration: '.8s',
    transition: '.8s',

    "&:hover": {
      transform: "scale(1.01)",
    }
  },

  productItem: {
    fontFamily: "Open Sans",
    cursor: "pointer",
    transition: "0.5s",
    width: "416px",
    marginBottom: "30px",

    "& > p": {
      transition: "0.5s"
    },

    "&:hover > p": {
      marginLeft: "1.5px"
    }
  },
  itemImg: {
    width: "100%",
    height: "auto",
    transition: '.6s',
  },
  goodsTitle: {
    textTransform: "uppercase",
    fontSize: "18px",
    marginTop: "20px",
    fontWeight: "700",
    color: "#000",
    color: "#000000"
  },
  goodsPrise: {
    marginTop: "14px",
    color: "rgba(132, 122, 122, 1)"
  },

  "@media (max-width: 768px)": {
    productListContainer: {
      marginLeft: "0"
    },
    goodsTitle: {
      marginTop: "5px",
      fontSize: "12px",
      lineHeight: "16px"
    },
    goodsPrise: {
      fontSize: "12px",
      marginTop: "5px"
    },
    productList: {
      margin: "0 auto",
      justifyContent: "space-around"
    },
    linkItem: {
      width: "35%",
      height: "auto",
      margin: "35px 0 0"
    },
    categoryName: {
      display: "none"
    },
    filter: {
      display: "block",
      fontSize: "16px",
      marginTop: "19px",
      marginLeft: "30px"
    }
  }
};

export const { classes } = jss.createStyleSheet(productListStyle).attach();
