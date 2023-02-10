import React from 'react';
import styled from './Button.module.scss';
import { ButtonProps, TYPE } from './Button.interface';

function Button({ children, type = TYPE.PRIMARY }: ButtonProps) {
  return (
    <button className={`${styled.button} ${styled['button--'+ type]}`}>{children}</button>
  );
};

export default Button;