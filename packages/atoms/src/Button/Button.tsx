import React from 'react';
import styled from './Button.module.scss';
import { ButtonProps } from './Button.interface';

function Button(props: ButtonProps) {
  
  return (
    <div className={ styled.button }>
        Button component
    </div>
  );
};

export default Button;