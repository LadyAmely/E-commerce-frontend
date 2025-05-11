import { useNavigate } from 'react-router-dom';
import { ProductCardProps } from './ProductCard.types';

export const useProductActions = (
    product: ProductCardProps['product'],
    onAddToCart: ProductCardProps['onAddToCart']
) => {
    const navigate = useNavigate();

    const handleAddToCartAndNavigate = () => {
        onAddToCart(product);
        navigate('/cart');
    };

    return {
        handleAddToCartAndNavigate,
    };
};
