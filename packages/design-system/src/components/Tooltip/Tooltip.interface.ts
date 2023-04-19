import { ReactNode } from "react";
import { OverlayProps } from "../../assets/overlay/Overlay.interface";

/** only extends needed porps for tooltip from OverlayProps */
export interface TooltipProps extends Pick<OverlayProps, 'placement' | 'modifiers'> {
    children: ReactNode;
    info: string;
}
