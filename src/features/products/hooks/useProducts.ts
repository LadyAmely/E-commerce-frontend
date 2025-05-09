import { useState, useEffect } from 'react';
import rawProducts from '../data/product.json';
import type { Product } from '../types';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(rawProducts);
    }, []);

    return { products };
};

