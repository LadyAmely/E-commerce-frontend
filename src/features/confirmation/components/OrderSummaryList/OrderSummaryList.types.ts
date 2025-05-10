export interface OrderItem {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
    quantity: number;
}

export interface OrderSummaryListProps {
    items: OrderItem[];
}
