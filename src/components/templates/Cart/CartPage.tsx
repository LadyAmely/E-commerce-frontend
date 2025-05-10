import React from 'react';
import CartList from '../../../features/cart/components/CartList/CartList';
import MainLayout from "../../../layouts/MainLayout";
import {useCartLogic} from "../../../features/cart/hooks/useCartLogic";
import CartSummary from "../../../features/cart/components/CartSummary/CartSummary";

const CartPage: React.FC = () => {

    const {
        cartItems,
        handleIncrease,
        handleDecrease,
        handleRemove,
    } = useCartLogic();

    return (
        <MainLayout>
            <>
                <CartList
                    items={cartItems}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                />
                <CartSummary total={3} />
            </>
        </MainLayout>
    );

};

export default CartPage;
