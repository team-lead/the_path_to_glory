import React, {Component} from 'react';

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGoodsCategories } from "../../../actions/getGoodsCategoryAction";
import { classes } from "./style";

import RangeSlider from '../RangeSlider'



class ProductsFilter extends Component {
    componentDidMount () {
        if (window.location.pathname === "/product-list/mens"){
            return this.props.getGoodsCategories("mens")
        } else if (window.location.pathname === "/product-list/womens") {
            return this.props.getGoodsCategories("womens")
        } else if (window.location.pathname === "/product-list/accessories") {
            return this.props.getGoodsCategories("accessories")
        }
    }
    
    getGoodsCategoryItems = () => {
        let path = null;
        if (window.location.pathname === "/product-list/mens"){
            path = "/product-list/mens";
        } else if (window.location.pathname === "/product-list/womens") {
            path = "/product-list/womens";
        } else if (window.location.pathname === "/product-list/accessories") {
            path = "/product-list/accessories";
        }
        return (
            
            this.props.categoriesList.map((category) => {
                
                return (
                    <li key={category}><Link to={`/${path}`} className={`${classes.categorySectionItem} ${classes.sectionItem}`}>{category}</Link></li>
                )
                
            })
        )
    }

    render() {
        const {
            categorySection,
            sectionTitle,
            categorySectionTitle,
            categorySectionItem,
            sectionItem,
            colorSection,
            colorSectionTitle,
            colorSectionItem,
            colorCircle,
            colorItem,
            priceSection,
            priceSectionTitle,
            priceDiapazon,
        } = classes;

        const colors = this.props.colors;
        const colorItems = colors.map((color) => <li key={color} className={colorItem}><div className={`${colorCircle} ${color}`}></div><a href='#' className={`${sectionItem} ${colorSectionItem}`}>{color}</a></li>);

        return(
            <div>
                <div className={categorySection}>
                    <p className={`${categorySectionTitle} ${sectionTitle}`}>{this.props.categoryName}</p>
                    <a href='#'className={`${categorySectionItem} ${sectionItem}`}>View All</a>
                    <ul>{this.getGoodsCategoryItems()}</ul>
                </div>
                <div className={colorSection}>
                    <p className={`${sectionTitle} ${colorSectionTitle}`}>colors</p>
                    <ul>{colorItems}</ul>
                </div>
                <div className={priceSection}>
                    <p className={`${sectionTitle} ${priceSectionTitle}`}>price</p>
                    <p className={priceDiapazon}>$25 - $930</p>
                    <RangeSlider/>
                </div>
            </div>
        )
    }
    }

    const mapStateToProps = state => {
        return {
            categoriesList: state.allCategories.categoriesList,
            categoryName: state.allCategories.categoryName
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            getGoodsCategories: url => dispatch(getGoodsCategories(url)),
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(ProductsFilter)