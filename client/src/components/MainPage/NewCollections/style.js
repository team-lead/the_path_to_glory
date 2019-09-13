import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let newCollectionsStyle = {
  collectionsContainer: {
    color: "#fff",
    padding: "40px",
    marginTop: "70px"
  },
  collectionsTitle: {
    fontFamily: "Open Sans",
    fontSize: "24px",
    margin: "0 0 17px 53px"
  },
  collectionImgsBlock: {
    display: "flex",
    justifyContent: "space-between"
  },
  collectionItem: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mainCollectionImg: {
    display: "block",
    // width: "45vw",
    width: "590px",
    height: "100vh"
  },
  сollectionImg: {
    display: "block",
    // width: "45vw",
    width: "590px",
    height: "49vh"
  },
  collectionItemImg: {
    position: "relative"
  },
  сollectionImgDescription: {
    fontFamily: "Open Sans",
    backgroundColor: "rgba(5,5,5,0.8)",
    padding: "23px 60px",
    display: "inline-block",
    position: "absolute",
    bottom: "0",
    left: "0",
    fontWeight: "bold"
  }
};
export const { classes } = jss.createStyleSheet(newCollectionsStyle).attach();
