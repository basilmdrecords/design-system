import { ReactNode, Dispatch, SetStateAction, DOMAttributes } from "react";
import { VirtualElement, Placement } from '@popperjs/core';
import { Modifier } from "react-popper";

type controlFunction = (setIsOpen: Dispatch<SetStateAction<boolean>>, isOpen: boolean) => 
    /** Pick any DOMAttributes later if needed */
    Pick<DOMAttributes<unknown>, 'onChange'
        | 'onClick'
        | 'onMouseEnter'
        | 'onMouseLeave'
        | 'onKeyPress'
        | 'onKeyDown'
>;

export interface OverlayProps extends Partial<VirtualElement> {
    triggerElement: ReactNode;
    overlayElement: ReactNode;
    triggerClassName?: string;
    overlayClassName?: string;
    arrowClassName?: string;
    hasArrow?: boolean;
    controlVisibility?: 'hover' | 'click' | controlFunction;
    placement?: Placement;
    modifiers?: ReadonlyArray<Modifier<unknown>>;
}
