import React, { InputHTMLAttributes, PropsWithChildren } from 'react';
export interface TextAreaProps extends PropsWithChildren<InputHTMLAttributes<HTMLTextAreaElement>> {
    label?: string;
    error?: string;
    wrapperClassName?: string;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<unknown>>;
export default TextArea;
