
import React from 'react';
import styles from './OrderSummaryList.module.scss';
import OrderItem from '../OrderItem/OrderItem';
import type { OrderSummaryListProps } from './OrderSummaryList.types';

const OrderSummaryList: React.FC<OrderSummaryListProps> = ({ items }) => {
    if (items.length === 0) {
        return <p className={styles.empty}>Brak produktów w zamówieniu.</p>;
    }

    return (
        <div className={styles.orderSummaryList}>
            {items.map((item) => (
                <OrderItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default OrderSummaryList;
