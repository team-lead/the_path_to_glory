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
              src="https://periscope.com.ua/sites/default/files/u1275/vertical-landscapes/vertical-landscape1.jpg"
              className={classes.mainCollectionImg}
              text="NEW IN"
            />
          </div>
          <div className={classes.collectionItem}>
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              className={classes.сollectionImg}
              text="NEW COLLECTION"
            />
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
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
