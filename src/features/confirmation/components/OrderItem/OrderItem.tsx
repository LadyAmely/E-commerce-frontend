import React from 'react';
import styles from './OrderItem.module.scss';

const OrderItem: React.FC = () => {

    return (
        <div className={styles.orderItem}>
            <div className={styles.details}>
                <div className={styles.name}>Banany BIO</div>
                <div className={styles.unitPrice}>3,49 zł / szt.</div>
            </div>
            <div className={styles.quantity}>x2</div>
            <div className={styles.subtotal}>6,98 zł</div>
        </div>
    );
}

export default OrderItem;