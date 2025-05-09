import React from 'react';
import styles from './ProductList.module.scss';
import {useProducts} from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductList: React.FC = () => {
    const { products } = useProducts();

    const handleAddToCart = (productId: number) => {
        console.log('Dodano do koszyka produkt ID:', productId);
    };

    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductList;
