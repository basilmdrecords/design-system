import React from 'react';
import styled from './H3.module.scss';
import { H3Props, Color } from './H3.interface';

function H3({ children, color = Color.Grey }: H3Props) {
  
  return (
    <h3 className={ styled[color] }>
      {children}
    </h3>
  );
};

export default H3;