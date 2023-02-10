import { BaseHTMLAttributes } from 'react';

export enum BadgeSize {
    ExtraSmall = 'xs',
    Small = 'sm',
    Medium = 'md',
    Large = 'lg'
}

export enum BadgeColor {
    Red = 'red',
    Blue = 'blue'
}

export enum BadgePosition {
    Relative = 'relative',
    TopRight = 'top-right',
    TopLeft = 'top-left'
}

export interface BadgeProps extends BaseHTMLAttributes<HTMLDivElement>{
    size?: `${BadgeSize}`,
    color?: `${BadgeColor}`,
    info?: string,
    position?: `${BadgePosition}`
}
