import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    const classes = `${styles.button} ${className}`.trim();

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;

