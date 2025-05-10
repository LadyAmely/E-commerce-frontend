import React from 'react';
import styles from './CartItem.module.scss';
import {CartItemProps} from "./CartItem.types";


const CartItem: React.FC<CartItemProps> = ({
                                               id,
                                               name,
                                               price,
                                               quantity,
                                               onIncrease,
                                               onDecrease,
                                               onRemove,
                                           }) => {
    const total = (price.main + price.fractional / 100) * quantity;

    return (
        <div className={styles.cartItem}>
            <div className={styles.details}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>
          {price.main},{price.fractional.toString().padStart(2, '0')} zł / szt.
        </span>
            </div>

            <div className={styles.controls}>
                <button onClick={() => onDecrease(id)} disabled={quantity <= 1}>-</button>
                <span className={styles.quantity}>{quantity}</span>
                <button onClick={() => onIncrease(id)}>+</button>
            </div>

            <div className={styles.total}>
                {total.toFixed(2).replace('.', ',')} zł
            </div>

            <button className={styles.remove} onClick={() => onRemove(id)}>
                Usuń
            </button>
        </div>
    );
};

export default CartItem;
