import React from "react";
export interface IOverlayClassNames {
    transitionEnter?: string;
    transitionEnterFrom?: string;
    transitionEnterTo?: string;
    transitionLeave?: string;
    transitionLeaveFrom?: string;
    transitionLeaveTo?: string;
    background?: string;
}
interface IProps {
    classes?: IOverlayClassNames;
}
export type { IProps as IOverlayProps };
declare const _default: React.ForwardRefExoticComponent<IProps & React.RefAttributes<any>>;
export default _default;
