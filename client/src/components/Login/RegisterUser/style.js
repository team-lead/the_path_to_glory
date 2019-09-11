import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let Register = {
  wrapper: {
    width: "40%",
    margin: "auto",
    backgroundColor: "black"
  },
  formWrapper: {
    padding: "1vw",
    fontFamily: "Josefin Sans",
    fontSize: "1vw",
    color: "#fff"
  },
  title: {
    marginTop: "2.5vw",
    marginBottom: "1vw",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  text: {
    borderBottom: "2px solid white",
    border: "0px",
    outline: "none",
    color: "white",
    backgroundColor: "black"
  },
  saveBtn: {
    marginLeft: "23%",
    marginTop: "5vw",
    marginBottom: "5vw",
    backgroundColor: 'white',
    textTransform: "uppercase",
    color: 'black',
    fontSize: '1.3vw',
    width: '16vw',
    height: '4vw',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid white',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  },

  error: {
    border: "1px solid red"
  },

  errorMessage: {
    paddingTop: "10px",
    color: "red",
    fontSize: "0.75em",
    display: "relative",
  },

  wrapperItem: {
    display: "flex",
    flexDirection: "column",
  },

}

export const { classes } = jss.createStyleSheet(Register).attach();
