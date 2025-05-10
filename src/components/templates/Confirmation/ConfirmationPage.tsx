import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import MainLayout from '../../../layouts/MainLayout';
import ConfirmationMessage from '../../../features/confirmation/components/ConfirmationMessage/ConfirmationMessage';
import OrderSummaryList from '../../../features/confirmation/components/OrderSummaryList/OrderSummaryList';
import OrderTotal from '../../../features/confirmation/components/OrderTotal/OrderTotal';
import '../../../assets/styles/utilities.scss';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const total = cartItems.reduce(
        (sum, item) =>
            sum + (item.price.main + item.price.fractional / 100) * item.quantity,
        0
    );

    return (
        <MainLayout>
            <ConfirmationMessage />
            <OrderSummaryList items={cartItems} />
            <OrderTotal total={total} />
            <div className="linkWrapper">
                <Link to="/" className="returnLink">← Wróć do sklepu</Link>
            </div>
        </MainLayout>
    );
};

export default ConfirmationPage;
