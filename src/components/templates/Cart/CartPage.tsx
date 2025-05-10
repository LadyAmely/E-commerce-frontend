import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import CartList from '../../../features/cart/components/CartList/CartList';
import CartSummary from '../../../features/cart/components/CartSummary/CartSummary';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../../store';
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from '../../../features/cart/cartSlice';

const CartPage: React.FC = () => {
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

    return (
        <MainLayout>
            <>
                <CartList
                    items={cartItems}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                />
                <CartSummary total={total} />
            </>
        </MainLayout>
    );
};

export default CartPage;
