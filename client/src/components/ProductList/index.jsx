import React, { Component } from 'react';

import ProductItem from "./ProductItem"
import {classes} from './style'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class ProductList extends Component {
    render() { 
        const{
            productListContainer,
            categoryName,
            productList,
            filter,
        }=classes;

        const nameCategory=()=>{
            if (window.location.pathname === "/product-list/mens"){
                return "Man"
            } else if (window.location.pathname === "/product-list/womens") {
                return "Woman"
            } else if (window.location.pathname === "/product-list/accessories") {
                return "Accessory"
            }
        }
        const openFiltr =()=>{
            console.log('Filter open')
        
        }
            return ( 
            <div className={productListContainer}>
                <h3 className = {categoryName}>{nameCategory()}</h3>
                <h3 className = {filter} onClick={openFiltr}>Filters</h3>
                <ul className = {productList}>
                    <ProductItem />
                </ul>
                <ScrollUpButton />
            </div>
        );
    }
}

export default ProductList;