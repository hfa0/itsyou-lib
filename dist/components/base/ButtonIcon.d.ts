import { HTMLAttributeAnchorTarget, MouseEventHandler } from 'react';
import { IconType } from './Icon';
declare const ButtonIcon: ({ onClick, icon, isLoading, href, target, disabled, }: {
    onClick?: MouseEventHandler<HTMLDivElement>;
    isLoading?: boolean;
    icon: IconType;
    href?: HTMLAttributeAnchorTarget;
    target?: string;
    disabled?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default ButtonIcon;
