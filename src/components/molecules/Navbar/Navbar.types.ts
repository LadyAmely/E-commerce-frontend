import React from 'react';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    variant: 'light' | 'dark' | 'transparent';
    totalItems?: number;
}
