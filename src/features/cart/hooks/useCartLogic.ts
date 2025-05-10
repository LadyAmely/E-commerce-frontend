import { useProducts } from '../../products/hooks/useProducts';


export const useCartLogic = () => {

    const { products } = useProducts();

    const cartItems = products.map((product) => ({
        ...product,
        quantity: 1,
    }));

    const handleIncrease = (id: number) => {
        console.log('Zwiększ ilość produktu:', id);
    };

    const handleDecrease = (id: number) => {
        console.log('Zmniejsz ilość produktu:', id);
    };

    const handleRemove = (id: number) => {
        console.log('Usuń produkt:', id);
    };

    return {
        cartItems,
        handleIncrease,
        handleDecrease,
        handleRemove,
    };
};
