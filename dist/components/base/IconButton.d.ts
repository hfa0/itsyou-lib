import { HTMLAttributeAnchorTarget, MouseEventHandler } from 'react';
import { IconType } from './Icon';
declare const IconButton: ({ onClick, icon, isLoading, href, target, disabled, className, size, iconClassName, loaderColor, }: {
    onClick?: MouseEventHandler<HTMLDivElement>;
    isLoading?: boolean;
    icon: IconType;
    href?: HTMLAttributeAnchorTarget;
    target?: string;
    disabled?: boolean;
    className?: string;
    iconClassName?: string;
    size?: number;
    loaderColor?: "light" | "dark";
}) => import("react/jsx-runtime").JSX.Element;
export default IconButton;
