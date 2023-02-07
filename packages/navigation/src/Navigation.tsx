import React from 'react';
import styled from './Button.module.scss';
import { NavigationProps } from './Navigation.interface';
import { Button } from '@basil/design-system';

function Navigation(props: NavigationProps) {
  
  return (
    <div className={ styled.navigation }>
        Navigation component
        <Button>Click Me</Button>
    </div>
  );
};

export default Navigation;