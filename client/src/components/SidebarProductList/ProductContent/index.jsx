import React from 'react';

import { classes } from "./style";

import FilterPath from '../FilterPath'
import ProductsFilter from '../ProductsFilter';
import ProductList from '../../ProductList'

const categories = ['Jackets', 'New', 'Shirts', 'Coats', 'Sweaters', 'Outerwear', 'Polos', 'Jeans'];
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