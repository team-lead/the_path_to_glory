import React from 'react';

import { classes } from "./style";

import FilterPath from '../FilterPath'
import ProductsFilter from '../ProductsFilter';
import ProductList from '../../ProductList'

const categories = ['Jackets', 'New arrivals', 'Shirts', 'Coats', 'Sweaters', 'Outerwear', 'Polos & Tees', 'Jeans & Pants'];
const colors = ['black', 'brown', 'red', 'white']

const ProductContent = () => {
    return(
        <div className={classes.main}>
            <div className={classes.leftMenu}>
                <FilterPath />
                <ProductsFilter categories={categories} colors={colors}/>
            </div>
            <ProductList/>
        </div>
    )
}

export default ProductContent;