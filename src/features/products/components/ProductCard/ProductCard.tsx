import React from 'react';
import styles from './ProductCard.module.scss';
import ProductPrice from "../ProductPrice/ProductPrice";
import {ProductCardProps} from "./ProductCard.types";


const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>{product.name}</div>
            <ProductPrice
                main={product.price.main}
                fractional={product.price.fractional}
            />
            <button
                className={styles.addButton}
                onClick={() => onAddToCart(product.id)}
            >
                Dodaj do koszyka
            </button>
        </div>
    );
};

export default ProductCard;

