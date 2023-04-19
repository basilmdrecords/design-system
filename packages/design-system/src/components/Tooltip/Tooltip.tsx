import styled from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.interface';
import Overlay from '../../behavior/Overlay';

const Element = () => {
  return <div style={{ width: 800, height: 800, background: 'blue' }} />
}

function Tooltip({ children, info, ...props }: TooltipProps) {

  return (
    <Overlay
      triggerElement={children}
      overlayElement={<Element />}
      overlayClassName={styled.tooltip}
      controlVisibility='click'
      {...props}
    />
  );
};

export default Tooltip;