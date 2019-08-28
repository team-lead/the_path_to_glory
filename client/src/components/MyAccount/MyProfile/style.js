import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let aboutUserStyle = {
  aboutUserContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    display: "flex",

    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center" ,
    
  },
  aboutUserText: {
    fontSize: "26px",
    paddingRight: "7px",
    borderBottom: "2px solid #111",
  },
  searchBtn: {
    margin: '10px',
    fontSize: '18',
    color: "#fff",
    backgroundColor: "#000",
    padding: "18px 85px",
    textDecoration: "none"
  }

}

export const { classes } = jss.createStyleSheet(aboutUserStyle).attach();
