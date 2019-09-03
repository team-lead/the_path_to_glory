import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { getGoodsData } from "../../actions/goodsListAction"
import { getGoodsDetailID } from "../../actions/detailGoodsAction"

class GoodsListComponent extends Component {
    
    componentDidMount () {
        this.props.getData()
    }
    
    getGoodsItems = () => {
        return (
            
            this.props.goodsList.map((goods) => {
                
                return (
                    <Link onClick = {() => this.props.getDataID(goods)} key = {goods._id} to = {`detail/${goods._id}`}>
                        <li>
                            <div>{goods.name}</div>
                            <div>{goods.price}</div>
                            <img src={goods.image[0]} alt={goods.image}/>
                        </li>
                    </Link>
                )
                
            })
        )
    }


    render() {
        console.log(this.props.goodsList.id)
        
        return (
            <>
            <div style = {{display: "flex", flexWrap: "wrap"}}>{this.getGoodsItems()}</div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        goodsList: state.goods.goodsList,
        goodsIdItem: state.active.some
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: url => dispatch(getGoodsData(url)),
        getDataID: id => dispatch(getGoodsDetailID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsListComponent)