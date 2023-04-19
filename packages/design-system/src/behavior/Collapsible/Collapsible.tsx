import React from 'react';
import styled from './Collapsible.module.scss';
import { CollapsibleProps } from './Collapsible.interface';

function Collapsible(props: CollapsibleProps) {
  
  return (
    <div className={ styled.collapsible }>
        Collapsible component
    </div>
  );
};

export default Collapsible;