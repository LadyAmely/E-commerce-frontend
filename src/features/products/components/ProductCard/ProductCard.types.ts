import type {Product} from "../../types";

export interface ProductCardProps {
    product: Product;
    onAddToCart: (productId: number) => void;
}