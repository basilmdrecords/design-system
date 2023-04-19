import React, { useState, useMemo } from 'react';
import styled from './Overlay.module.scss';
import { OverlayProps } from './Overlay.interface';
import { usePopper } from 'react-popper';

const defaultOffset = {
    name: 'offset',
    options: {
      offset: [0, 8],
    }
  }

function Overlay({ 
  triggerElement,
  overlayElement,
  hasArrow = true,
  controlVisibility = 'hover',
  placement = 'auto',
  modifiers = [defaultOffset],
  triggerClassName,
  overlayClassName,
  arrowClassName
}: OverlayProps) {
  const [referenceElement, setReferenceElement] = useState<Element|null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement|null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: modifiers,
  });

  const control = useMemo(() => {
    if (controlVisibility === 'hover') {
      return {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false)
      };
    }
    if (controlVisibility === 'click') {
      return {
        onClick: () => setIsOpen(prev => !prev)
      }
    }
    return controlVisibility(setIsOpen, isOpen);
  }, [controlVisibility, isOpen]);
  
  return (
    <>
      <div ref={setReferenceElement} {...control} className={`${styled.trigger} ${triggerClassName}`}>
        {triggerElement}
      </div>

      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={`${styled.overlay} ${overlayClassName}`}
        >
          {overlayElement}
          {hasArrow && <div data-popper-arrow style={{...styles.arrow}} className={`${styled.arrow} ${arrowClassName}`} />}
        </div>
      )}
    </>
  );
};

export default Overlay;