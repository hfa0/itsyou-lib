import React, { InputHTMLAttributes } from 'react';
import { IconType } from './Icon';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IconType;
    wrapperClassName?: string;
    label?: string;
    placeholder?: string;
    error?: string;
}
declare const Input: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default Input;
