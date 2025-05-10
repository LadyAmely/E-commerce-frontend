import {Product} from "../../../products/types";


export interface CheckoutItem extends Product {
    quantity: number;
}

export interface CheckoutListProps {
    items: CheckoutItem[];
}
