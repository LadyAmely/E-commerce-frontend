import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';

export const useCheckout = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const total = cartItems.reduce(
        (sum, item) =>
            sum + (item.price.main + item.price.fractional / 100) * item.quantity,
        0
    );

    return {
        cartItems,
        total,
    };
};
