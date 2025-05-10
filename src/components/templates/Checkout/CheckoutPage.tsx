import React from 'react';
import CheckoutList from "../../../features/checkout/components/CheckoutList/CheckoutList";
import CheckoutSummary from "../../../features/checkout/components/CheckoutSummary/CheckoutSummary";
import MainLayout from "../../../layouts/MainLayout";


const CheckoutPage: React.FC =()=>{

    const items = [
        {
            id: 1,
            name: 'Banany BIO',
            price: { main: 3, fractional: 49 },
            quantity: 2,
        },
        {
            id: 2,
            name: 'Mleko 3.2%',
            price: { main: 2, fractional: 89 },
            quantity: 1,
        },
    ];


    return(
        <>
            <MainLayout>
                <CheckoutList items={items} />
                <CheckoutSummary total={4} />
            </MainLayout>
        </>
    );
}

export default CheckoutPage;