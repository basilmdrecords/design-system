import React from 'react';
import styled from './Accordion.module.scss';
import { AccordionProps } from './Accordion.interface';

function Accordion(props: AccordionProps) {
  
  return (
    <div className={ styled.accordion }>
        Accordion component
    </div>
  );
};

export default Accordion;