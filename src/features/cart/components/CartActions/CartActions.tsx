import React from 'react';
import styles from './CartActions.module.scss';
import {Link} from "react-router-dom";


const CartActions: React.FC = () => {

    return (<div className={styles.cartActions}>
            <Link to="/" className={styles.backLink}>← Kontynuuj zakupy</Link>
            <button className={styles.checkoutButton}>Przejdź do podsumowania</button>
        </div>
    );

}

export default CartActions;