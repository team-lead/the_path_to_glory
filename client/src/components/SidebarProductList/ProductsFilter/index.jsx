import React, {Component} from 'react';

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RangeSlider from '../RangeSlider'
import { classes } from "./style";

import {
        getGoodsCategories,
        SHOW_CATEGORU_MENU,
        SHOW_COLOR_MENU,
        WINDOW_DESCTOP
    } from "../../../actions/getGoodsCategoryAction";




class ProductsFilter extends Component {
    componentDidMount () {
        if (window.location.pathname === "/product-list/mens"){
            return this.props.getGoodsCategories("mens")
        } else if (window.location.pathname === "/product-list/womens") {
            return this.props.getGoodsCategories("womens")
        } else if (window.location.pathname === "/product-list/accessories") {
            return this.props.getGoodsCategories("accessories")
        }
        this.props.getGoodsCategories()
    }
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
            mobileColor,
        } = classes;


        const items = this.props.categoriesList.map((category) => {
                return (
                <li key={category}><Link to={`/`} className={`${categorySectionlinck} ${sectionItem}`}>{category}</Link></li>
                )
            })

        const colors = this.props.colors;
        const colorItems = colors.map((color) => <li key={color} className={colorItem}><div className={`${colorCircle} ${color}`}></div><Link to ='' className={`${sectionItem} ${colorSectionItem}`}>{color}</Link></li>);

        const categoiesMenu =<div className={categorySection}>
                                <p className={`${categorySectionTitle} ${sectionTitle}`}>{this.props.categoryName}</p>
                                <a href='#'className={`${categorySectionItem} ${sectionItem}`}>View All</a>
                                <div>
                                    <p className={mobileCategoiFilter} onClick={()=>this.props.showCategoru()}>Categories</p>
                                    {this.props.showCategoriMenu?<i class="fas fa-angle-up"></i>:<i class="fas fa-angle-down"></i>}
                                </div>
                                {this.props.showCategoriMenu? <ul className={categoriesMenu}>{items}</ul>:null  }
                            </div> ;

        const colorMenu = <div className={colorSection}>
                <div className = {mobileColor}>
                    <p className={`${sectionTitle} ${colorSectionTitle}`} onClick ={()=>this.props.showColor()}>colors</p>
                    {this.props.showColorMenu?<i class="fas fa-angle-up"></i>:<i class="fas fa-angle-down"></i>}
                </div>
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
        showCategoriMenu:state.allCategories.isShowCategoriMenu,
        showColorMenu:state.allCategories.isShowColorMenu,
        categoriesList: state.allCategories.categoriesList,
        categoryName: state.allCategories.categoryName,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getGoodsCategories: url => dispatch(getGoodsCategories(url)),
        showCategoru:()=>dispatch({type:SHOW_CATEGORU_MENU}),
        showDesctop:()=>dispatch({type:WINDOW_DESCTOP}),
        showColor:()=>dispatch({type:SHOW_COLOR_MENU})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsFilter);
