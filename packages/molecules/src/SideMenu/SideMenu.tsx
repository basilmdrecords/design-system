import React from 'react';
import styled from './SideMenu.module.scss';
import { SideMenuProps } from './SideMenu.interface';

function SideMenu(props: SideMenuProps) {
  
  return (
    <div className={ styled.sideMenu }>
        SideMenu component
    </div>
  );
};

export default SideMenu;