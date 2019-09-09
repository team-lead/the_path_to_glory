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
<<<<<<< HEAD
                <h3 className = {categoryName}>Jackets</h3>
=======
                <h3 className = {categoryName}>All goods</h3>
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
                <ul className = {productList}>
                    <ProductItem />
                </ul>
            </div>
        );
    }
}

export default ProductList;