import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h4>Sklep</h4>
                        <a href="#">Polecane produkty</a>
                        <a href="#">Gotowe rozwiązania posiłków</a>
                        <a href="#">Karty podarunkowe</a>
                        <a href="#">Zaproś znajomego</a>
                        <a href="#">Dołącz do programu</a>
                    </div>

                    <div className={styles.column}>
                        <h4>O Veggable</h4>
                        <a href="#">O nas</a>
                        <a href="#">Blog</a>
                        <a href="#">Standardy żywności</a>
                        <a href="#">Jak to działa</a>
                        <a href="#">Kariera</a>
                        <a href="#">Sprzedawaj z nami</a>
                    </div>

                    <div className={styles.column}>
                        <h4>Przewodniki świąteczne</h4>
                        <a href="#">Święto Dziękczynienia</a>
                        <a href="#">Zimowe święta</a>
                    </div>

                    <div className={styles.column}>
                        <h4>Potrzebujesz pomocy?</h4>
                        <a href="#">Polityka prywatności</a>
                        <a href="#">Kontakt</a>
                        <a href="#">Centrum pomocy</a>
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
