import React from 'react';
import styles from './CheckoutList.module.scss';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import { CheckoutListProps } from './CheckoutList.types';

const CheckoutList: React.FC<CheckoutListProps> = ({ items }) => {
    return (
        <div className={styles.checkoutList}>
            {items.length === 0 ? (
                <p className={styles.empty}>Koszyk jest pusty.</p>
            ) : (
                items.map((item) => (
                    <CheckoutItem key={item.id} {...item} />
                ))
            )}
        </div>
    );
};

export default CheckoutList;
