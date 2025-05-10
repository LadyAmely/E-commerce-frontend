export interface CheckoutItem {
    id: number;
    name: string;
    quantity: number;
    price: {
        main: number;
        fractional: number;
    };
}
