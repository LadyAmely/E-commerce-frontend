import React from 'react';
import styles from './ProductPrice.module.css';
import {ProductPriceProps} from "./ProductPrice.types";

const ProductPrice: React.FC<ProductPriceProps> = ({ main, fractional }) => {
    return (
        <span className={styles.price}>
      {main}
            <sup>{fractional.toString().padStart(2, '0')}</sup>
      <span className={styles.currency}>zł</span>
    </span>
    );
};

export default ProductPrice;