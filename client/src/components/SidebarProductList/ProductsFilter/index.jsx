import React, {Component} from 'react';
import { connect } from "react-redux";

import { classes } from "./style";

import RangeSlider from '../RangeSlider'
import {filterGoodsByCategory} from "../../../actions/filterGoodsByCategory"



class ProductsFilter extends Component {

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

        const categories = this.props.categories;
        console.log(categories)
        
        const items = categories.map((category) => 
            <li 
                key={category}
                onClick={() => this.props.filterGoodsByCategory(category)}>
            <a href='#' className={`${categorySectionItem} ${sectionItem}`}>{category}</a></li>);
        const colors = this.props.colors;
        const colorItems = colors.map((color) => <li key={color} className={colorItem}><div className={`${colorCircle} ${color}`}></div><a href='#' className={`${sectionItem} ${colorSectionItem}`}>{color}</a></li>);

        return(
            <div>
                <div className={categorySection}>
                    <p className={`${categorySectionTitle} ${sectionTitle}`}>woman</p>
                    <a href='#'className={`${categorySectionItem} ${sectionItem}`}>View All</a>
                    <ul>{items}</ul>
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

const mapDispatchToProps = dispatch => {
    return {
        filterGoodsByCategory: category => dispatch(filterGoodsByCategory(category)),
    }
}

    export default connect(
        null,
        mapDispatchToProps
      )(ProductsFilter);