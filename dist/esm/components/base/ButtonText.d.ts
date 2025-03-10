import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    href?: string;
    isLoading?: boolean;
}
declare const ButtonText: ({ href, children, onClick, disabled, className, }: Props) => import("react/jsx-runtime").JSX.Element;
export default ButtonText;
