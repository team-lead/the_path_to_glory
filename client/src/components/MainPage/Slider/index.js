import React from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { classes } from "./style";

const SliderView = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    appendDots: dots => (
      <div>
        <ul className={classes.dots}>{dots}</ul>
      </div>
    ),
    customPaging: i => <div className={classes.dotItem} />
  };
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Slider {...settings} className={classes.slider}>
        <div>
          <div className={classes.collectionSlide}>
            <h2 className={classes.collectionTitle}>NEW COLLECTION</h2>
            <h4 className={classes.collectionLink}>
              <span className={classes.textUnderline}>SH</span>OP NOW
            </h4>
          </div>
          <img
            alt="clothes"
            className={classes.slide}
            src="https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        <div>
          <img
            alt="clothes"
            className={classes.slide}
            src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        <div>
          <img
            alt="clothes"
            className={classes.slide}
            src="https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1322&q=80"
          />
        </div>
      </Slider>
    </>
  );
};

export default SliderView;
