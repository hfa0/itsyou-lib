import { ReactNode } from 'react';
import { IOverlayProps } from './Overlay';
export interface IModalClassNames {
    root?: string;
    container?: string;
    innerContainer?: string;
    transitionEnter?: string;
    transitionEnterFrom?: string;
    transitionEnterTo?: string;
    transitionLeave?: string;
    transitionLeaveFrom?: string;
    transitionLeaveTo?: string;
    content?: string;
    panel?: string;
}
interface IProps {
    open: boolean;
    name?: string;
    onClose(): void;
    children: ReactNode;
    classes?: IModalClassNames;
    overlayProps?: IOverlayProps;
}
declare function Modal(props: IProps): import("react/jsx-runtime").JSX.Element;
export type { IProps as IModalProps };
export default Modal;
