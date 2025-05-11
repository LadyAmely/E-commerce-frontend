import React from 'react';
import styles from './CheckoutSummary.module.css';
import PlaceOrderButton from '../PlaceOrderButton/PlaceOrderButton';
import { Link } from 'react-router-dom';
import { CheckoutSummaryProps } from './CHeckoutSummary.types';
import { formatPrice } from './utils';

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ total }) => {
    const formattedTotal = formatPrice(total);

    return (
        <div className={styles.summary}>
            <h3>Podsumowanie</h3>
            <div className={styles.row}>
                <span className={styles.label}>Suma do zapłaty:</span>
                <span className={styles.value}>{formattedTotal} zł</span>
            </div>
            <div className={styles.row}>
                <Link to="/cart" className={styles.backLink}>
                    ← Powrót do koszyka
                </Link>
                <PlaceOrderButton />
            </div>
        </div>
    );
};

export default CheckoutSummary;

