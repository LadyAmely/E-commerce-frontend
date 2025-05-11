import React from 'react';
import styles from './ProductCard.module.scss';
import ProductPrice from '../ProductPrice/ProductPrice';
import { ProductCardProps } from './ProductCard.types';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        onAddToCart(product);
        navigate('/cart');
    };

    return (
        <div className={styles.card}>
            <div className={styles.name}>{product.name}</div>
            <ProductPrice
                main={product.price.main}
                fractional={product.price.fractional}
            />
            <button className={styles.addButton} onClick={handleClick}>
                Dodaj do koszyka
            </button>
        </div>
    );
};

export default ProductCard;


