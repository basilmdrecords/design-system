import { BaseHTMLAttributes } from 'react';

export enum Color {
    Grey = 'grey',
    White = 'white',
    Disabled = 'disabled',
    Ghost = 'ghost',
    Red = 'red',
    Yellow = 'yellow',
    Green = 'green',
  }
  
  export interface H3Props extends BaseHTMLAttributes<HTMLDivElement>{
    color?: `${Color}`;
  }
