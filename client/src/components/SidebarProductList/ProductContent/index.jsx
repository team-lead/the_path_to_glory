import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classes } from "./style";

import FilterPath from '../FilterPath'
import ProductsFilter from '../ProductsFilter';
import ProductList from '../../ProductList'
import FilterHeader from '../FilterHeader/FilterHeader'

const categories = ['Jackets', 'New arrivals', 'Shirts', 'Coats', 'Sweaters', 'Outerwear', 'Polos & Tees', 'Jeans & Pants'];
const colors = ['black', 'brown', 'red', 'white']

class ProductContent extends Component{
render(){
    const desctopView = <div className={classes.main}>
                <div className={classes.leftMenu}>
                    <FilterPath />
                    <ProductsFilter categories={categories} colors={colors}/>
                </div>
                <ProductList/>
            </div>

    const mobileVew = <div>
        <FilterHeader/>
        <ProductsFilter categories={categories} colors={colors}/>
        </div>

    const showMenu = this.props.showFilterMenu ? mobileVew : desctopView

    return(
        <>
            {showMenu}
            </>
            )
        }
    };
const mapStateToProps=(state)=>{
    return {
        showFilterMenu:state.showFilterMenu.isShowFilterMenu
    };
}

export default connect(mapStateToProps)(ProductContent);