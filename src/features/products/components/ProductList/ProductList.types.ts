import type { Product } from '../../types';

export interface ProductListProps {
    onAddToCart: (product: Product) => void;
}
