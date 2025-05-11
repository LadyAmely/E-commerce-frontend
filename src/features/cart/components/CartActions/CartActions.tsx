import React from 'react';
import styles from './CartActions.module.css';
import { Link } from 'react-router-dom';
import Button from "../../../../components/atoms/Button/Button";


const CartActions: React.FC = () => {
    return (
        <div className={styles.cartActions}>
            <Link to="/" className={styles.backLink}>← Kontynuuj zakupy</Link>
            <Button className={styles.checkoutButton}>
                Przejdź do podsumowania
            </Button>
        </div>
    );
};

export default CartActions;
