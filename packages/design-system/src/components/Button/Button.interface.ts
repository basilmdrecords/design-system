import { ButtonHTMLAttributes } from 'react';

export enum ButtonType {
    RoyalBlue = 'royalBlue',
    CeruleanBlue = 'ceruleanBlue',
    Turquoise = 'turquoise',
    LimeGreen = 'limeGreen',
    Purple = 'purple',
    Red = 'red'
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: `${ButtonType}`,
    disabled?: boolean,
}
