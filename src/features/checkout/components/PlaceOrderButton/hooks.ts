

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { resetCart } from '../../../cart/cartSlice';

export const usePlaceOrder = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const placeOrder = () => {
        if (cartItems.length === 0) return;
        localStorage.setItem('lastOrder', JSON.stringify(cartItems));
        dispatch(resetCart());
        window.location.href = '/confirmation.html';
    };

    return { placeOrder, isCartEmpty: cartItems.length === 0 };
};
