import React from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './CartList.module.scss';
import {CartListProps} from "./CartList.types";

const CartList: React.FC<CartListProps> = ({ items, onIncrease, onDecrease, onRemove }) => {
    if (items.length === 0) {
        return <p className={styles.empty}>Twój koszyk jest pusty.</p>;
    }

    return (
        <div className={styles.list}>
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
};

export default CartList;