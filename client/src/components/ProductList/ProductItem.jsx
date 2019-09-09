<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGoodsData } from '../../actions/goodsListAction';
import { getGoodsDetailID } from '../../actions/detailGoodsAction';
import {classes} from './style'

class ProductItem extends Component {
componentDidMount() {
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
=======
import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { getGoodsDetailID } from "../../actions/detailGoodsAction"
import { getMensGoods } from "../../actions/getGoodsAction"
import { getWomensGoods } from "../../actions/getGoodsAction"
import { getAcsGoods } from "../../actions/getGoodsAction"
import {classes} from './style'

class ProductItem extends Component {
    
    componentDidMount () {
        if(window.location.href === "http://localhost:3000/product-list/mens") {
            this.props.getMensGoods()
        } else if (window.location.href === "http://localhost:3000/product-list/womens") {
            this.props.getWomensGoods()
        } else if (window.location.href === "http://localhost:3000/product-list/accessories"){
            this.props.getAcsGoods()
        } else {
            return new Error("Something Wrong")
        }
        
    }
    
    getMensGoodsItems = () => {
        return (
            
            this.props.mensGoods.map((goods) => {
                
                return (
                    <Link className = {classes.linkItem} onClick = {() => this.props.getDataID(goods)} key = {goods.id} to = {`/detail/${goods.id}`}>
                        <li className = {classes.productItem}>
                            <img className={classes.itemImg} src={goods.image[0]} alt={goods.image}/>
                            <p className={classes.goodsTitle}>{goods.name}</p>
                            <p className={classes.goodsPrise}>{goods.price}</p>
                        </li>
                    </Link>
                )
                
            })
        )
    }

    getWomensGoodsItems = () => {
        return (
            
            this.props.womensGoods.map((goods) => {
                
                return (
                    <Link className = {classes.linkItem} onClick = {() => this.props.getDataID(goods)} key = {goods.id} to = {`/detail/${goods.id}`}>
                        <li className = {classes.productItem}>
                            <img className={classes.itemImg} src={goods.image[0]} alt={goods.image}/>
                            <p className={classes.goodsTitle}>{goods.name}</p>
                            <p className={classes.goodsPrise}>{goods.price}</p>
                        </li>
                    </Link>
                )
                
            })
        )
    }

    getAcsGoodsItems = () => {
        return (
            
            this.props.acsGoods.map((goods) => {
                
                return (
                    <Link className = {classes.linkItem} onClick = {() => this.props.getDataID(goods)} key = {goods.id} to = {`/detail/${goods.id}`}>
                        <li className = {classes.productItem}>
                            <img className={classes.itemImg} src={goods.image[0]} alt={goods.image}/>
                            <p className={classes.goodsTitle}>{goods.name}</p>
                            <p className={classes.goodsPrise}>{goods.price}</p>
                        </li>
                    </Link>
                )
                
            })
        )
    }

    currentGoodsList = () => {
        if(window.location.href === "http://localhost:3000/product-list/mens") {
            return this.getMensGoodsItems()
        } else if (window.location.href === "http://localhost:3000/product-list/womens") {
            return this.getWomensGoodsItems()
        } else if (window.location.href === "http://localhost:3000/product-list/accessories"){
            return this.getAcsGoodsItems()
        } else {
            return new Error("Something Wrong")
        }
    }

    


    render() {
        return (
            <>
            {this.currentGoodsList()}
            </>
        )
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
    }
}

const mapStateToProps = state => {
    return {
<<<<<<< HEAD
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
=======
        goodsIdItem: state.active.objectId,
        mensGoods: state.allGoods.mensGoodsList,
        womensGoods: state.allGoods.womensGoodsList,
        acsGoods: state.allGoods.acsGoodsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataID: id => dispatch(getGoodsDetailID(id)),
        getMensGoods: (url) => dispatch(getMensGoods(url)),
        getWomensGoods: (url) => dispatch(getWomensGoods(url)),
        getAcsGoods: (url) => dispatch(getAcsGoods(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
