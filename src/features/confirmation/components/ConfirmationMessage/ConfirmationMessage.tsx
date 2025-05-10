import React from 'react';
import styles from './ConfirmationMessage.module.scss';

const ConfirmationMessage: React.FC = () => {

    return (
        <div className={styles.confirmationMessage}>
            <h1>Zamówienie złożone pomyślnie!</h1>
            <p>Dziękujemy za zakupy w Veggable Store. Wkrótce wyślemy Twoje produkty.</p>
        </div>
    );
}

export default ConfirmationMessage;