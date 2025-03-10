import { HTMLAttributes } from 'react';
import { IconType } from './Icon';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    icon?: IconType;
    wrapperClassName?: string;
    active?: boolean;
}
declare const ActiveButton: ({ children, active, wrapperClassName, className, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default ActiveButton;
