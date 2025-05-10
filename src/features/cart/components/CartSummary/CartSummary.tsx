import React from 'react';
import styles from './CartSummary.module.scss';
import {CartSummaryProps} from "./CartSummary.types";



const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
    const formattedTotal = total.toFixed(2).replace('.', ',');

    return (
        <div className={styles.summary}>
            <h3>Podsumowanie</h3>
            <div className={styles.row}>
                <span>Łączna kwota:</span>
                <span className={styles.total}>{formattedTotal} zł</span>
            </div>
        </div>
    );
};

export default CartSummary;
