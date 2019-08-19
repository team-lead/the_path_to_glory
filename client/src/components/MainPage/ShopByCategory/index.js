import React from "react";
import ClothesImgItem from "../ClothesImgItem";
import { classes } from "./style";

const NewCollections = () => {
  return (
    <>
      <div className={classes.collectionsContainer}>
        <p className={classes.collectionsTitle}>Shop by Category</p>
        <div className={classes.collectionImgsBlock}>
          <div className={classes.collectionItem}>
            <ClothesImgItem
              classes={classes}
              alt="BAG SHOP"
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              className={classes.сollectionImg}
              text="BAG SHOP"
            />
            <ClothesImgItem
              classes={classes}
              alt="DRESS SHOP"
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
              className={classes.сollectionImg}
              text="DRESS SHOP"
            />
            <ClothesImgItem
              classes={classes}
              alt="BELT SHOP"
              src="https://images.unsplash.com/photo-1485458895885-7139b8fd447a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={classes.сollectionImg}
              text="BELT SHOP"
            />
          </div>
          <div>
            <ClothesImgItem
              classes={classes}
              alt="SUNGLASSES SHOP"
              src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={classes.mainCollectionImg}
              text="SUNGLASSES SHOP"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewCollections;
