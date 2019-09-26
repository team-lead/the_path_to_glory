import React, {Component} from 'react';
import { connect } from 'react-redux';
import { classes } from "./style";

import FilterPath from '../FilterPath'
import ProductsFilter from '../ProductsFilter';
import ProductList from '../../ProductList'
import FilterHeader from '../FilterHeader/FilterHeader'


class ProductContent extends Component{
render(){
    const desctopView = <div className={classes.main}>
                <div className={classes.leftMenu}>
                    <FilterPath />
                    <ProductsFilter/>
                </div>
                <ProductList/>
            </div>

    const mobileView = <div>
        <FilterHeader/>
        <ProductsFilter/>
        </div>

    const showMenu = this.props.showFilterMenu ? mobileView : desctopView

    return(
                <>
                    {showMenu}
                </>
            )
        }
    };
const mapStateToProps=(state)=>{
    return {
        showFilterMenu:state.allCategories.isShowFilterMenu
    };
}

export default connect(mapStateToProps)(ProductContent);