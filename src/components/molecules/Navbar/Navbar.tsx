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
                    <Link to="/help">Help Center</Link>
                    <Link to="/invite">Invite Friends</Link>
                    <Link to="/gift">Buy a Gift Card</Link>
                    <Link to="/membership">Join Membership</Link>
                </div>
                <div className={styles.right}>
                    <Link to="/favorites">❤️ For you</Link>
                    <Link to="/cart" className={styles.cart}>🛒 {totalItems}</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

