import React from 'react';

import { classes } from "./style";

import FilterPath from '../FilterPath'
import ProductsFilter from '../ProductsFilter';

const categories = ['Jackets', 'New arrivals', 'Shirts', 'Coats', 'Sweaters', 'Outerwear', 'Polos & Tees', 'Jeans & Pants'];
const colors = ['black', 'brown', 'red', 'white']

const LeftSideMenu = () => {
    return(
        <div className={classes.leftMenu}>
            <FilterPath />
            <ProductsFilter categories={categories} colors={colors}/>
        </div>
    )
}

export default LeftSideMenu;