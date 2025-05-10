import React from 'react';
import styles from './Hero.module.scss';
import heroImage from '../../../assets/images/banner.png';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                <img src={heroImage} alt="Fresh food offer" />
            </div>
            <div className={styles.content}>
                <h1>
                    Welcome to Veggable Store. Get 20% off<br/> your first 4 grocery orders
                </h1>
                <p>
                    Discover the freshest food delivered to your door. Enjoy healthy eating made easy with this offer.
                    Use code <strong>Veggable20</strong> at checkout.
                </p>
                <button className={styles.ctaButton}>
                    USE CODE VEGGABLE20
                </button>
            </div>
        </section>
    );
};

export default Hero;
