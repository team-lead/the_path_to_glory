import React,{Fragment} from 'react';
import Header from '../../components/Header'
import ProductContent from '../../components/SidebarProductList/ProductContent';


const ProductsPage = () => {
    return(
        <Fragment>
            <Header />
            <ProductContent />
        </Fragment>
    )
}

export default ProductsPage;