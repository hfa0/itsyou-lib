import React from 'react';
import { IconType } from './Icon';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    filled?: boolean;
    styleType?: 'dark' | 'light';
    href?: string;
    icon?: IconType;
    wrapperClassName?: string;
    iconClassName?: string;
    isLoading?: boolean;
}
declare const Button: ({ styleType, children, className, wrapperClassName, icon, href, isLoading, iconClassName, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
