import React from 'react';
import styles from './CheckoutItem.module.css';
import {CheckoutItemProps} from "./CheckoutItem.types";


const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
    const { name, price, quantity } = item;
    const total = (price.main + price.fractional / 100) * quantity;
    const formattedTotal = total.toFixed(2).replace('.', ',');

    return (
        <div className={styles.checkoutItem}>
            <div className={styles.details}>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>
                    {price.main},{price.fractional.toString().padStart(2, '0')} zł / szt.
                </div>
            </div>
            <div className={styles.quantity}>x{quantity}</div>
            <div className={styles.total}>{formattedTotal} zł</div>
        </div>
    );
};

export default CheckoutItem;
