import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const welcomPageStyle = {
  container: {
    textAlign: "center",
    margin: "0 auto"
  },
  title: {
    fontFamily: "Josefin Sans",
    fontSize: "36px",
    margin: "158px 0 0 80px"
  },
  categoryList: {
    display: "flex",
    justifyContent: 'center',
    flexWrap: "wrap",
    margin: "139px 0 0 80px"
  },
  categoryItem: {
    textDecoration: "none",
    width: "640px",
    margin: "0 15px 15px 0",
    backgroundColor: "#000000",
    position: "relative",
    textAlign: 'left'
  },
  categoryTitle: {
    fontFamily: "Josefin Sans",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#fff",
    paddingTop: "50px",
    paddingLeft: "115px",
    marginBottom: "10px"
  },
  categoryDescription: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    color: "#fff",
    paddingBottom: "50px",
    paddingLeft: "115px"
  },
  icon: {
    position: "absolute",
    fontSize: "36px",
    color: "#fff",
    top: "62px",
    left: "39px"
  }
};

export const { classes } = jss.createStyleSheet(welcomPageStyle).attach();
