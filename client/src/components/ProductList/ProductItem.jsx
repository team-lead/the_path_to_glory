import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { getGoodsDetailID } from "../../actions/detailGoodsAction"
import { getGoods } from "../../actions/getGoodsAction"
import { classes } from './style'

class ProductItem extends Component {
    
    componentDidMount () {
        if (window.location.pathname === "/product-list/mens"){
            return this.props.getGoods("mens")
        } else if (window.location.pathname === "/product-list/womens") {
            return this.props.getGoods("womens")
        } else if (window.location.pathname === "/product-list/accessories") {
            return this.props.getGoods("accessories")
        }
    }
    
    getGoodsItems = () => {
        return (
            
            this.props.goodsList.map((goods) => {
                
                return (
                    <Link className = {classes.linkItem} key = {goods.id} to = {`/detail/${goods.id}`}>
                        <li className = {classes.productItem}>
                            <img className={classes.itemImg} src={goods.image[0]} alt={goods.image}/>
                            <p className={classes.goodsTitle}>{goods.name}</p>
                            <p className={classes.goodsPrise}>$ {goods.price}</p>
                        </li>
                    </Link>
                )
                
            })
        )
    }

    render() {
        return (
            <Fragment>
            {this.getGoodsItems()}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        goodsList: state.allGoods.goodsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getGoods: url => dispatch(getGoods(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)