import React from 'react';
import styles from './CheckoutItem.module.scss';

const CheckoutItem: React.FC = () => {

    return (
        <div className={styles.checkoutItem}>
            <div className={styles.details}>
                <div className={styles.name}>Banany BIO</div>
                <div className={styles.price}>3,49 zł / szt.</div>
            </div>
            <div className={styles.quantity}>x2</div>
            <div className={styles.total}>6,98 zł</div>
        </div>
    );
}

export default CheckoutItem;