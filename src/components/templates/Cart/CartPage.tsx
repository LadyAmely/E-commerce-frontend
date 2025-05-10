import React from 'react';
import CartList from '../../../features/cart/components/CartList/CartList';
import MainLayout from "../../../layouts/MainLayout";
import {useCartLogic} from "../../../features/cart/hooks/useCartLogic";

const CartPage: React.FC = () => {

    const {
        cartItems,
        handleIncrease,
        handleDecrease,
        handleRemove,
    } = useCartLogic();

    return (
        <>
            <MainLayout children={
            <CartList
                items={cartItems}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
            />}/>
        </>
    );
};

export default CartPage;
