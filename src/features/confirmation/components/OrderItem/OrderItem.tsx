import React from 'react';
import styles from './OrderItem.module.scss';
import { CartItem } from '../../../cart/cartSlice';

interface OrderItemProps {
    item: CartItem;
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
    const { name, price, quantity } = item;
    const unitPrice = `${price.main},${price.fractional.toString().padStart(2, '0')} zł / szt.`;
    const subtotal = ((price.main + price.fractional / 100) * quantity)
        .toFixed(2)
        .replace('.', ',');

    return (
        <div className={styles.orderItem}>
            <div className={styles.details}>
                <div className={styles.name}>{name}</div>
                <div className={styles.unitPrice}>{unitPrice}</div>
            </div>
            <div className={styles.quantity}>x{quantity}</div>
            <div className={styles.subtotal}>{subtotal} zł</div>
        </div>
    );
};

export default OrderItem;
