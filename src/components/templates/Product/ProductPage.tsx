import React from 'react';
import ProductList from "../../../features/products/components/ProductList/ProductList";
import MainLayout from "../../../layouts/MainLayout";



const ProductPage: React.FC = () => {

    return(
        <>
            <MainLayout children={<ProductList/>}/>
        </>
    );
}

export default ProductPage;