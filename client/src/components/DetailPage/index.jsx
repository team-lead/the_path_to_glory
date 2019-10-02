import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { classes } from "./style";
import Sizes from "./ClothesSizes";
import Colors from "./ClothesColors";
import Button from "../Button/index";
import Header from "../Header";
import {
  getGoodsDetailID,
  addToCart,
  saveUserCart
} from "../../actions/detailGoodsAction";
import GoodsSlider from "./GoodsSlider";
import "./animation.css"

class DetailPageComponent extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    let arrUrl = window.location.pathname.split("/");
    let ID = `${arrUrl[2]}`;
    this.props.getDataID(ID);
  }

  handlerImages1 = () => {
    let photoColors1 = this.props.goodsItemDetails.map(item => {
      let some = Object.entries(item.images);
      console.log(some[0][0]);
      console.log(some[0][1]);
      return some[0][1];
    });
    this.setState({ data: photoColors1[0] });
    return photoColors1;
  };
  handlerImages2 = () => {
    let photoColors2 = this.props.goodsItemDetails.map(item => {
      let some = Object.entries(item.images);
      return some[1][1];
    });
    this.setState({ data: photoColors2[0] });
    return photoColors2;
  };

  shooseColor = color => {
    return this.props.goodsItemDetails.filter(item => {
      if (color.toLowerCase() === item.color[0].toLowerCase()) {
        console.log(color);
        return this.handlerImages1();
      } else {
        return this.handlerImages2();
      }
    });
  };

  activeColor = (color) => {
    console.log(color);
    
  }

  handlerItem = () => {
    return this.props.goodsItemDetails.map(item => {
      const showColors = () => {
        if (item.color) {
          return (
            <Fragment>
              <Colors
                colors={item.color}
                activeColor1={() => this.shooseColor(item.color[0])}
                activeColor2={() => this.shooseColor(item.color[1])}
              />
              <Sizes sizes={item.size} />
            </Fragment>
          );
        } else return null;
      };
      return (
        <Fragment key={item.id}>
          <Header />
          <div className={classes.container}>
            <li className={classes.liStyle}>
              <div className={classes.imageParams}>
                <img
                  src={this.state.data ? this.state.data[0] : item.image[0]}
                  alt="dsa"
                />
                <GoodsSlider
                  images={this.state.data ? this.state.data : item.image}
                  sss={item.images}
                />
              </div>

              <div className={classes.containerInfo}>
                <div className={classes.headerInfoText}>
                  <h2>{item.name}</h2>
                  <h2>{item.price} $</h2>
                </div>
                <p className={classes.refStyle}>REF: {item.ref}</p>

                {showColors()}

                <div className={classes.sizeGuide}>
                  {/* <a href="#" className={classes.sizeHelper}>Size guide</a> */}
                </div>

                <div className={classes.description}>
                  <h3 className={`${classes.h3} ${classes.filterType}`}>
                    Details
                  </h3>
                  <div className={classes.descriptionContainer}>
                    <p>{item.description[0]}</p>
                    <p>{item.description[1]}</p>
                    <p>{item.description[2]}</p>
                  </div>
                </div>

                <Button
                  clickHandler={() => {
                    if (
                      !this.props.shoppingBag.some(
                        product => product.id === item.id
                      )
                    ) {
                      this.props.addToCart(item);
                      this.props.saveUserCart();
                      return true;
                    }
                    return false;
                  }}
                  successMessage="Added Successfully!"
                  failMessage="Already in your Basket!"
                  btnSettings={classes.btnSettings}
                  black
                  name="add to bascket"
                />
              </div>
            </li>
          </div>
        </Fragment>
      );
    });
  };

  render() {
    return <Fragment>{this.handlerItem()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    goodsItemDetails: state.active.objectId,
    shoppingBag: state.active.shoppingBag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataID: id => dispatch(getGoodsDetailID(id)),
    addToCart: product => dispatch(addToCart(product)),
    saveUserCart: () => dispatch(saveUserCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPageComponent);
