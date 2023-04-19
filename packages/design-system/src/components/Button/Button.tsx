import React from 'react';
import styled from './Button.module.scss';
import { ButtonProps, ButtonType } from './Button.interface';

function Button({ children, buttonType = ButtonType.RoyalBlue, ...props }: ButtonProps) {
  return (
    <button className={`${styled.button} ${styled[buttonType]}`} {...props}>
      <div className={styled['button-content']}>
        {children}
      </div>
    </button>
  );
}

export default Button;
