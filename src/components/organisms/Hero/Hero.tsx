import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../../assets/images/banner.png';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                <img src={heroImage} alt="Fresh food offer"/>
            </div>
            <div className={styles.content}>
                <h1>
                    Witamy w Veggable Store. Odbierz 20% zniżki<br/> na pierwsze 4 zamówienia spożywcze
                </h1>
                <p>
                    Odkryj najświeższą żywność z dostawą do domu. Zdrowe odżywianie jeszcze nigdy nie było tak proste.
                    Użyj kodu <strong>Veggable20</strong> przy finalizacji zamówienia.
                </p>
            </div>
        </section>
    );
};

export default Hero;
