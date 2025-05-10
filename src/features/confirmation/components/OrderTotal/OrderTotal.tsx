import React from 'react';
import styles from './OrderTotal.module.scss';
import {OrderTotalProps} from "./OrderTotal.types";



const OrderTotal: React.FC<OrderTotalProps> = ({ total }) => {
    const formatted = total.toFixed(2).replace('.', ',');
    return (
        <div className={styles.orderTotal}>
            <span className={styles.label}>Łączna kwota zamówienia:</span>
            <span className={styles.value}>{formatted} zł</span>
        </div>
    );
};

export default OrderTotal;
