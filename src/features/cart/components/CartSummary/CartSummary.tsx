import React from 'react';
import styles from './CartSummary.module.css';
import {CartSummaryProps} from "./CartSummary.types";
import {Link, useNavigate} from "react-router-dom";



const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
    const formattedTotal = total.toFixed(2).replace('.', ',');
    const navigate = useNavigate();

    return (
        <div className={styles.summary}>
            <h3>Podsumowanie</h3>
            <div className={styles.row}>
                <span>Łączna kwota:</span>
                <span className={styles.total}>{formattedTotal} zł</span>
            </div>
            <div className={styles.actions}>
                <Link to="/" className={styles.backLink}>← Powrót do listy produktów</Link>
                <button className={styles.checkoutButton} onClick={() => navigate('/checkout')}>
                    Przejdź do podsumowania zamówienia
                </button>
            </div>
        </div>
    );
};

export default CartSummary;
