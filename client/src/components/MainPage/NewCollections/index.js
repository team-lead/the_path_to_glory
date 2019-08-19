import React from "react";
import ClothesImgItem from "../ClothesImgItem";
import { classes } from "./style";

const NewCollections = () => {
  return (
    <>
      <div className={classes.collectionsContainer}>
        <p className={classes.collectionsTitle}>New</p>
        <div className={classes.collectionImgsBlock}>
          <div className={classes.collectionItem}>
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1549920867-1629df28cdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              className={classes.mainCollectionImg}
              text="NEW IN"
            />
          </div>
          <div className={classes.collectionItem}>
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={classes.сollectionImg}
              text="NEW COLLECTION"
            />
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={classes.сollectionImg}
              text="NEW COLLECTION"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewCollections;
