import React, { Fragment } from "react";
import ClothesImgItem from "../ClothesImgItem";
import { classes } from "./style";
import Container from "../../Container";

const NewCollections = () => {
  const {
    collectionsContainer,
    collectionsTitle,
    collectionImgsBlock,
    collectionItem,
    mainCollectionImg,
    сollectionImg
  } = classes;
  return (
    <Fragment>
      <Container containerStg={collectionsContainer}>
        <p className={collectionsTitle}>New</p>
        <div className={collectionImgsBlock}>
          <div className={classes.collectionItem}>
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1549920867-1629df28cdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              className={mainCollectionImg}
              text="NEW IN"
            />
          </div>
          <div className={collectionItem}>
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={сollectionImg}
              text="NEW COLLECTION"
            />
            <ClothesImgItem
              classes={classes}
              alt="new collection"
              src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className={сollectionImg}
              text="NEW COLLECTION"
            />
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
export default NewCollections;
