import {Product} from "../../../products/types";

export interface CartProduct extends Product {
    quantity: number;
}

export interface CartListProps {
    items: CartProduct[];
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}