import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    isLoading?: boolean;
    children?: string;
    errors?: any;
    className?: string;
    styleType?: 'dark' | 'light';
    Element?: any;
    action?: string;
}
declare const ButtonSubmit: ({ children, onClick, className, styleType, type, action, Element, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default ButtonSubmit;
