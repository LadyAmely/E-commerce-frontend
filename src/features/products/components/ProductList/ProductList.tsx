import React from 'react';
import styles from './ProductList.module.scss';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import {ProductListProps} from "./ProductList.types";

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
    const { products } = useProducts();

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};


export default ProductList;

