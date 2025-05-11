import React from 'react';
import styles from './CartItem.module.css';
import type { CartItemProps } from './CartItem.types';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import Button from "../../../../components/atoms/Button/Button";


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
    const formattedTotal = total.toFixed(2).replace('.', ',');

    return (
        <div className={styles.cartItem}>
            <div className={styles.details}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>
                    {price.main},{price.fractional.toString().padStart(2, '0')} zł / szt.
                </span>
            </div>

            <QuantitySelector
                quantity={quantity}
                onIncrease={() => onIncrease(id)}
                onDecrease={() => onDecrease(id)}
            />

            <div className={styles.total}>
                {formattedTotal} zł
            </div>

            <Button
                className={styles.remove}
                onClick={() => onRemove(id)}
            >
                Usuń
            </Button>
        </div>
    );
};

export default CartItem;
