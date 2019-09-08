import React, { Component, Fragment } from 'react';

import ProductItem from "./ProductItem"
import {classes} from './style'

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
            </div>
        );
    }
}

export default ProductList;