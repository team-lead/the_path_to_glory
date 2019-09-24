import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {classes} from './style';
import Sizes from './ClothesSizes';
import Colors from './ClothesColors';
import Button from '../Button/index';
import Header from '../Header';
import {getGoodsDetailID} from '../../actions/detailGoodsAction';
import {addToCart} from "../../actions/cartActions";


class DetailPageComponent extends Component {
    componentDidMount() {
        let arrUrl = window.location.pathname.split('/');
        let ID = `${arrUrl[2]}`;
        this.props.getDataID(ID);
    }

    handlerItem = () => {
        return this.props.goodsItemDetails.map(item => {
            return (
                <Fragment key={item.id}>
                    <Header/>
                    <div className={classes.container}>
                        <div className={classes.linksNavs}>
                            <a href='/product-list'>Back</a>
                            <a href='/main'>Next</a>
                        </div>
                        <li className={classes.liStyle}>
                            <div className={classes.imageParams}>
                                <img src={item.image[0]} alt='dsa'/>
                                <img src={item.image[1]} alt='dsa'/>
                            </div>

                            <div className={classes.containerInfo}>
                                <div className={classes.headerInfoText}>
                                    <h2>{item.name}</h2>
                                    <h2>{item.price} $</h2>
                                </div>
                                <p className={classes.refStyle}>REF: {item.ref}</p>

                                <Colors/>
                                <Sizes/>

                                <div className={classes.sizeGuide}>
                                    <a href='/'>Size guide</a>
                                </div>

                                <div className={classes.description}>
                                    <h3 className={classes.h3}>Details</h3>
                                    <p>{item.description[0]}</p>
                                    <p>{item.description[1]}</p>
                                    <p>{item.description[2]}</p>
                                </div>

                                <Button
                                    btnSettings={classes.btnSettings}
                                    black
                                    name='add to basket'
                                />

                                <button onClick={() => this.props.addToCart(item)}>dispatch</button>
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

const mapDispatchToProps = dispatch => {
    return {
        getDataID: id => dispatch(getGoodsDetailID(id)),
        addToCart: id => dispatch(addToCart(id))
    };
};

const mapStateToProps = state => {
    return {
        goodsItemDetails: state.active.objectId,
        cart: state.cart
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPageComponent);
