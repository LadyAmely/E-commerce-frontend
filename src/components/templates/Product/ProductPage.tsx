import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import ProductList from '../../../features/products/components/ProductList/ProductList';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../features/cart/cartSlice';
import { Product } from '../../../features/products/types';

const ProductPage: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <MainLayout>
            <ProductList onAddToCart={handleAddToCart} />
        </MainLayout>
    );
};

export default ProductPage;

