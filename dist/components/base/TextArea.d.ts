import React, { InputHTMLAttributes, PropsWithChildren } from 'react';
interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLTextAreaElement>> {
    label?: string;
    error?: string;
    wrapperClassName?: string;
}
declare const TextArea: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default TextArea;
