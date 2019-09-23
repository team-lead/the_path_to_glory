import React, {Component} from 'react';
import { Link } from "react-router-dom"
import {connect} from "react-redux"

import { classes } from "./style";

import RangeSlider from '../RangeSlider'
import {
        SHOW_CATEGORU_MENU,
        WINDOW_DESCTOP
} from '../../../actions/showFilterMenuAction'


class ProductsFilter extends Component {

    render() {
        const {
            categorySection,
            sectionTitle,
            categorySectionTitle,
            categorySectionItem,
            categorySectionlinck,
            sectionItem,
            colorSection,
            colorSectionTitle,
            colorSectionItem,
            colorCircle,
            colorItem,
            priceSection,
            priceSectionTitle,
            priceDiapazon,
            categoriesMenu,
            mobileCategoiFilter,
        } = classes;

        const categories = this.props.categories;
        const items = categories.map((category) => <li key={category}><Link to='' className={`${categorySectionlinck} ${sectionItem}`}>{category}</Link></li>);
        const colors = this.props.colors;
        const colorItems = colors.map((color) => <li key={color} className={colorItem}><div className={`${colorCircle} ${color}`}></div><Link to ='' className={`${sectionItem} ${colorSectionItem}`}>{color}</Link></li>);

        const categoiesMenu =<div className={categorySection}>
                                <p className={`${categorySectionTitle} ${sectionTitle}`}>woman</p>
                                <a href='#'className={`${categorySectionItem} ${sectionItem}`}>View All</a>
                                <div>
                                <p className={mobileCategoiFilter} onClick={()=>this.props.showCategoru()}>Categories</p>
                                {this.props.showCategoriMenu?<i class="fas fa-chevron-up"></i>:<i class="fas fa-chevron-down"></i>}
                                </div>
                                {this.props.showCategoriMenu? <ul className={categoriesMenu}>{items}</ul>:null  }
                            </div> ;
        const colorMenu = <div className={colorSection}>
                                <p className={`${sectionTitle} ${colorSectionTitle}`}>colors</p>
                                <ul>{colorItems}</ul>
                            </div>
        const priceMenu = <div className={priceSection}>
                            <p className={`${sectionTitle} ${priceSectionTitle}`}>price</p>
                            <p className={priceDiapazon}>$25 - $930</p>
                            <RangeSlider/>
                        </div>

        window.addEventListener('resize',()=>{
            if(document.body.clientWidth === 768){
                this.props.showDesctop()
            }
        })
    
        return(
            <div>
                {categoiesMenu}
                {colorMenu}
                {priceMenu}
            </div>
        )
    }
};

const mapStateToProps=state=>{
    return{
        showCategoriMenu:state.showFilterMenu.isShowCategoriMenu
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        showCategoru:()=>dispatch({type:SHOW_CATEGORU_MENU}),
        showDesctop:()=>dispatch({type:WINDOW_DESCTOP}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsFilter);