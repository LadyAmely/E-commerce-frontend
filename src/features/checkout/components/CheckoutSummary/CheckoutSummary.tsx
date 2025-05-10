import React from 'react';
import styles from './CheckoutSummary.module.scss';
import PlaceOrderButton from '../PlaceOrderButton/PlaceOrderButton';
import {Link} from "react-router-dom";
import {CheckoutSummaryProps} from "./CHeckoutSummary.types";


const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ total }) => {
    const formatted = total.toFixed(2).replace('.', ',');

    return (
        <div className={styles.summary}>
            <h3>Podsumowanie</h3>
            <div className={styles.row}>
                <span className={styles.label}>Suma do zapłaty:</span>
                <span className={styles.value}>{formatted} zł</span>
            </div>
            <div className={styles.row}>
                <Link to="/cart" className={styles.backLink}>← Powrót do koszyka</Link>
                <PlaceOrderButton/>
            </div>
        </div>
    );
};

export default CheckoutSummary;
