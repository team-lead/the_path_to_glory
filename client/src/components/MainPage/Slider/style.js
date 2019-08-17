import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let headerStyle = {
  slider: {
    width: "100%",
    "& > div.slick-dots": {
      position: "relative",
      bottom: "40px",
      right: "43vw"
    }
  },
  slide: {
    height: "90vh",
    width: "100%"
  },
  dotItem: {
    border: "2px #fff solid",
    padding: "40%",
    borderRadius: "100%",
    margin: "3px"
  },
  dots: {
    margin: "0px",
    // position: "relative",
    // bottom: "40px",
    // right: "43vw",
    "& > li.slick-active > div": {
      backgroundColor: "#fff",
      borderRadius: "100%"
    }
  },
  collectionSlide: {
    position: "absolute",
    top: "25%",
    left: "22.5%"
  },
  collectionTitle: {
    fontFamily: "Josefin Sans",
    fontWeight: "bold",
    fontSize: "48px",
    color: "#fff"
  },
  collectionLink: {
    fontFamily: "Open Sans",
    fontSize: "36px",
    color: "#fff",
    textAlign: "right",
    marginTop: "28px"
  },
  textUnderline: {
    textDecoration: "underline"
  }
};
export const { classes } = jss.createStyleSheet(headerStyle).attach();
