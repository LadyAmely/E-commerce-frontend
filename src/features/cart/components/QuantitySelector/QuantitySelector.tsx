import React from 'react';
import styles from './QuantitySelector.module.scss';
import {QuantitySelectorProps} from "./QuantitySelector.types";



const QuantitySelector: React.FC<QuantitySelectorProps> = ({
                                                               quantity,
                                                               onIncrease,
                                                               onDecrease,
                                                               min = 1,
                                                               max = Infinity,
                                                           }) => {
    return (
        <div className={styles.selector}>
            <button onClick={onDecrease} disabled={quantity <= min}>−</button>
            <span>{quantity}</span>
            <button onClick={onIncrease} disabled={quantity >= max}>+</button>
        </div>
    );
};

export default QuantitySelector;
