import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames/dedupe';
import Link from 'next/link';
import Icon from './Icon';
import Loader from './Loader';
const Button = ({ styleType = 'dark', children, className, wrapperClassName, icon, href, isLoading, iconClassName, ...rest }) => {
    const Comp = href ? Link : 'button';
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const props = href ? { href, ...rest } : rest;
    return (_jsx("div", { className: classNames('flex', wrapperClassName), children: _jsx(Comp, { ...props, disabled: props.disabled, className: classNames(className, 'w-full min-w-20 py-2 border-2 shadow-sm rounded-md font-medium', { 'pointer-events-none': props.disabled || isLoading }, { 'opacity-50': props.disabled }, {
                'bg-primary text-white border-dark hover:bg-dark/80': styleType === 'dark',
                'bg-white text-gray hover:bg-gray-50/70 hover:text-gray-800': styleType === 'light',
            }), children: _jsx("div", { className: 'flex space-x-3 justify-center items-center h-full px-2 text-center w-full min-h-5', children: isLoading ? (_jsx(Loader, { color: styleType === 'dark' ? 'light' : 'dark' })) : (_jsxs(_Fragment, { children: [icon && _jsx(Icon, { className: iconClassName, size: 15, name: icon }), _jsx("div", { className: 'whitespace-nowrap', children: children })] })) }) }) }));
};
export default Button;
