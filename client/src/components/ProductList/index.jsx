import React, { Component } from 'react';

import ProductItem from "./ProductItem"
import {classes} from './style'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

class ProductList extends Component {
    render() { 
        const{
            productListContainer,
            categoryName,
            productList,
        }=classes;

            return ( 
            <div className={productListContainer}>
                <h3 className = {categoryName}>All goods</h3>
                <ul className = {productList}>
                    <ProductItem />
                </ul>
                <ScrollUpButton />
            </div>
        );
    }
}

export default ProductList;