import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import CheckoutList from '../../../features/checkout/components/CheckoutList/CheckoutList';
import CheckoutSummary from '../../../features/checkout/components/CheckoutSummary/CheckoutSummary';
import MainLayout from '../../../layouts/MainLayout';

const CheckoutPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const total = cartItems.reduce(
        (sum, item) =>
            sum + (item.price.main + item.price.fractional / 100) * item.quantity,
        0
    );

    return (
        <MainLayout>
            <>
                <CheckoutList items={cartItems} />
                <CheckoutSummary total={total} />
            </>
        </MainLayout>
    );
};

export default CheckoutPage;
