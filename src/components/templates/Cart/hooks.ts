import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../../features/cart/cartSlice";


export const useCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleIncrease = (id: number) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id: number) => {
        dispatch(decreaseQuantity(id));
    };

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const total = cartItems.reduce(
        (sum, item) =>
            sum + (item.price.main + item.price.fractional / 100) * item.quantity,
        0
    );

    return {
        cartItems,
        total,
        handleIncrease,
        handleDecrease,
        handleRemove,
    };
};
