
import React from 'react';
import styles from './PlaceOrderButton.module.css';
import { usePlaceOrder } from './hooks';

const PlaceOrderButton: React.FC = () => {
    const { placeOrder, isCartEmpty } = usePlaceOrder();

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.placeOrderButton}
                onClick={placeOrder}
                disabled={isCartEmpty}
            >
                Złóż zamówienie
            </button>
        </div>
    );
};

export default PlaceOrderButton;


