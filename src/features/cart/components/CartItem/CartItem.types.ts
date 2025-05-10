

export interface CartItemProps {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
    quantity: number;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}