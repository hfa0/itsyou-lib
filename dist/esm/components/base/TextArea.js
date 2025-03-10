import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Textarea as TextareaUi } from '@headlessui/react';
import classNames from 'classnames/dedupe';
import InputWrapper from './InputWrapper';
const TextArea_ = ({ wrapperClassName, error, label, className, ...rest }, ref) => {
    return (_jsx(InputWrapper, { className: wrapperClassName, error: error, label: label, children: _jsx(TextareaUi, { ref: ref, ...rest, className: classNames(className, 'border-2 min-h-12 w-full rounded-sm p-1.5 shadow-sm text-primary') }) }));
};
const TextArea = forwardRef(TextArea_);
export default TextArea;
