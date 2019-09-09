import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGoodsData } from '../../actions/goodsListAction';
import { getGoodsDetailID } from '../../actions/detailGoodsAction';
import {classes} from './style'
import InfiniteScroll from 'react-infinite-scroller'


class ProductItem extends Component {
componentDidMount() {
    console.log(this.props);
    this.props.getData();
}

getGoodsItems = () => {
    return this.props.goodsList.map(goods => {
        return (
            
        <Link className = {classes.linkItem}
            onClick={() => this.props.getDataID(goods)}
            key={goods._id}
            to={`detail/${goods._id}`}>
            <li  className = {classes.productItem}>
            <img className={classes.itemImg} src={goods.image[0]} alt={goods.image} />
            <p className={classes.goodsTitle}>{goods.name}</p>
            <p className={classes.goodsPrise}>{goods.price} $</p>
            </li>
        </Link>
        );
    });
};

render() {
    console.log(this.props.goodsList.id);

    return (
        <>
            {this.getGoodsItems()}
        </>
    );
    }
}

const mapStateToProps = state => {
    return {
    goodsList: state.goods.goodsList,
    goodsIdItem: state.active.some
    };
};

const mapDispatchToProps = dispatch => {
    return {
    getData: url => dispatch(getGoodsData(url)),
    getDataID: id => dispatch(getGoodsDetailID(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);
