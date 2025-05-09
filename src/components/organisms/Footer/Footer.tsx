import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h4>Shop</h4>
                        <a href="#">Shop Featured Items</a>
                        <a href="#">Meal Solutions</a>
                        <a href="#">Gift Cards</a>
                        <a href="#">Refer A Friend</a>
                        <a href="#">Join Membership</a>
                    </div>

                    <div className={styles.column}>
                        <h4>About Good Eggs</h4>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Food Standards</a>
                        <a href="#">How It Works</a>
                        <a href="#">Careers</a>
                        <a href="#">Sell Your Goods</a>
                    </div>

                    <div className={styles.column}>
                        <h4>Holiday Guides</h4>
                        <a href="#">Thanksgiving</a>
                        <a href="#">Winter Holidays</a>
                    </div>

                    <div className={styles.column}>
                        <h4>Need Help?</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Help Center</a>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <span>© 2025 Veggable Store, Inc.</span>
            </div>
        </footer>
    );
};

export default Footer;
