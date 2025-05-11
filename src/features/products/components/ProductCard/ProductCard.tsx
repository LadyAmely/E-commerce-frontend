import React from 'react';
import styles from './ProductCard.module.css';
import ProductPrice from '../ProductPrice/ProductPrice';
import { ProductCardProps } from './ProductCard.types';
import { useProductActions } from './hooks';

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const { handleAddToCartAndNavigate } = useProductActions(product, onAddToCart);

    return (
        <div className={styles.card}>
            <div className={styles.name}>{product.name}</div>
            <ProductPrice
                main={product.price.main}
                fractional={product.price.fractional}
            />
            <button className={styles.addButton} onClick={handleAddToCartAndNavigate}>
                Dodaj do koszyka
            </button>
        </div>
    );
};

export default ProductCard;



