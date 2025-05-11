import { useDispatch } from 'react-redux';
import {Product} from "../../../features/products/types";
import {addToCart} from "../../../features/cart/cartSlice";

export const useProductCartActions = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return {
        handleAddToCart,
    };
};
