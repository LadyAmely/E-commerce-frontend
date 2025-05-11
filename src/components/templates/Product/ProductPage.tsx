import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import ProductList from '../../../features/products/components/ProductList/ProductList';
import {useProductCartActions} from "./hooks";

const ProductPage: React.FC = () => {
    const { handleAddToCart } = useProductCartActions();

    return (
        <MainLayout>
            <ProductList onAddToCart={handleAddToCart} />
        </MainLayout>
    );
};

export default ProductPage;


