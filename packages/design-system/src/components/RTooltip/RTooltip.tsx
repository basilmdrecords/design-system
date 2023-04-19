import React from 'react';
import { RTooltipProps } from './RTooltip.interface';
import { Tooltip } from 'react-tooltip';
import './RTooltip.scss';
import { Button } from '../Button';

function RTooltip(props: RTooltipProps) {
  
  // return (
  //   <>
  //     <button id='button-tooltip' >this button has tooltip</button>
  //     <Tooltip anchorSelect='#button-tooltip' content='this is tooltip of the button' />
  //   </>
  // );
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
      <Button>Button 1</Button>
      <Button id='button-tooltip' >this button has tooltip</Button>
      <Button>Button 2</Button>
      <Tooltip anchorSelect='#button-tooltip' variant='light' isOpen>
        <div style={{padding: '6px 8px'}}>
          <h3>this is popup has a long text asdadsadsasdadasd</h3>
          <div style={{width: '30px', height: '30px', background: 'wheat'}}></div>
        </div>
      </Tooltip>
    </div>
  );
};

export default RTooltip;