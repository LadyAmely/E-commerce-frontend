import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import CartList from '../../../features/cart/components/CartList/CartList';
import CartSummary from '../../../features/cart/components/CartSummary/CartSummary';
import {useCart} from "./hooks";


const CartPage: React.FC = () => {
    const {
        cartItems,
        total,
        handleIncrease,
        handleDecrease,
        handleRemove
    } = useCart();

    return (
        <MainLayout>
            <CartList
                items={cartItems}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
            />
            <CartSummary total={total} />
        </MainLayout>
    );
};

export default CartPage;
