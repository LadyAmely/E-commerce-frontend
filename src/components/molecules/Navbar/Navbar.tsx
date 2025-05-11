import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import type { NavbarProps } from './Navbar.types';

const Navbar: React.FC<NavbarProps> = ({ variant, totalItems = 0, ...rest }) => {
    return (
        <header className={clsx(styles.navbar, variant && styles[variant])} {...rest}>
            <div className={styles.topRow}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logo}>Veggable<strong>Store</strong></Link>
                    <Link to="/help">Centrum pomocy</Link>
                    <Link to="/invite">Zaproś znajomych</Link>
                    <Link to="/gift">Kup kartę podarunkową</Link>
                    <Link to="/membership">Dołącz do członkostwa</Link>
                </div>
                <div className={styles.right}>
                    <Link to="/favorites">❤️ Dla Ciebie</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

