import React from 'react';
import styles from './PlaceOrderButton.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { resetCart } from '../../../cart/cartSlice';

const PlaceOrderButton: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (cartItems.length === 0) return;
        localStorage.setItem('lastOrder', JSON.stringify(cartItems));
        dispatch(resetCart());
        window.location.href = '/confirmation.html';
    };

    return (
        <div className={styles.wrapper}>
            <button className={styles.placeOrderButton} onClick={handleClick}>
                Złóż zamówienie
            </button>
        </div>
    );
};

export default PlaceOrderButton;


