import React from 'react';
import styled from './Button.module.scss';
import { ButtonProps } from './Button.interface';

function Button({ children }: ButtonProps) {
  return (
    <button className={styled.button}>{children}</button>
  );
};

export default Button;