
import React from 'react';
import CheckoutList from '../../../features/checkout/components/CheckoutList/CheckoutList';
import CheckoutSummary from '../../../features/checkout/components/CheckoutSummary/CheckoutSummary';
import MainLayout from '../../../layouts/MainLayout';
import {useCheckout} from "./hooks";


const CheckoutPage: React.FC = () => {
    const { cartItems, total } = useCheckout();

    return (
        <MainLayout>
            <CheckoutList items={cartItems} />
            <CheckoutSummary total={total} />
        </MainLayout>
    );
};

export default CheckoutPage;
