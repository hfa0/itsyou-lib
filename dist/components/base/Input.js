import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import classNames from 'classnames/dedupe';
import Icon from './Icon';
import InputWrapper from './InputWrapper';
function Input_({ icon, className, label, wrapperClassName, error, ...rest }, ref) {
    return (_jsx(InputWrapper, { error: error, label: label, className: wrapperClassName, children: _jsxs("div", { className: classNames('flex items-center'), children: [icon && (_jsx(Icon, { name: icon, className: 'ml-4 -mr-10 z-10 text-gray-400' })), _jsx("input", { ...rest, ref: ref, className: classNames('border-2 rounded-sm w-full min-h-10 border-gray-200 shadow-sm', className, icon ? 'px-12' : 'px-4') })] }) }));
}
const Input = forwardRef(Input_);
export default Input;
