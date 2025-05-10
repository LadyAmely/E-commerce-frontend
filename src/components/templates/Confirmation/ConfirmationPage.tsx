import React from 'react';
import MainLayout from "../../../layouts/MainLayout";
import ConfirmationMessage from "../../../features/confirmation/components/ConfirmationMessage/ConfirmationMessage";
import OrderSummaryList from "../../../features/confirmation/components/OrderSummaryList/OrderSummaryList";
import OrderTotal from "../../../features/confirmation/components/OrderTotal/OrderTotal";
import  '../../../assets/styles/utilities.scss';
import {Link} from "react-router-dom";

const items = [
    {
        id: 1,
        name: 'Banany BIO',
        price: { main: 3, fractional: 49 },
        quantity: 2
    },
    {
        id: 2,
        name: 'Mleko 3.2%',
        price: { main: 2, fractional: 89 },
        quantity: 1
    }
];

const total = items.reduce(
    (sum, item) =>
        sum + (item.price.main + item.price.fractional / 100) * item.quantity,
    0
);


const ConfirmationPage = () => {

    return(
        <>
            <MainLayout>
                <ConfirmationMessage/>
                <OrderSummaryList items={items}/>
                <OrderTotal total={total}/>
                <div className="linkWrapper">
                    <Link to="/" className="returnLink">
                        ← Wróć do sklepu
                    </Link>
                </div>
            </MainLayout>
        </>
    );
}

export default ConfirmationPage;