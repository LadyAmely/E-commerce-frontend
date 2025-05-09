import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
                                           variant,
                                           children,
                                           className = '',
                                           ...props
                                       }) => {
    const variantClass = styles[`button--${variant}`];
    const classes = `${styles.button} ${variantClass} ${className}`.trim();

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
