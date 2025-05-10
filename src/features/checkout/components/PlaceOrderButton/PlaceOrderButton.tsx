import React from 'react';
import styles from './PlaceOrderButton.module.scss';

const PlaceOrderButton: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.placeOrderButton}>
                Złóż zamówienie
            </button>
        </div>
    );
};

export default PlaceOrderButton;
