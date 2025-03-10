import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames/dedupe';
import Button from './Button';
import Modal from './Modal';
const ButtonText = ({ href, children, onClick, disabled, className, }) => {
    const C = href ? Link : 'div';
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e) => {
        if (href) {
            onClick?.(e);
            return;
        }
        setIsOpen(true);
    };
    return (_jsxs(_Fragment, { children: [_jsx(C, { onClick: handleClick, href: href, className: classNames(className, 'w-full text-center text-secondary font-medium cursor-pointer hover:text-secondary/80', { 'opacity-70 pointer-events-none': disabled }), children: children }), _jsxs(Modal, { name: 'Confirmation', open: isOpen, onClose: () => setIsOpen(false), classes: { content: 'space-y-10' }, children: [_jsxs("p", { className: 'text-xl text-center', children: ["Are you sure you want to ", _jsx("br", {}), ' ', _jsx("strong", { className: 'text-secondary', children: children }), "?"] }), _jsxs("div", { className: 'flex space-x-6 justify-center', children: [_jsx(Button, { styleType: 'dark', onClick: (e) => {
                                    onClick?.(e);
                                    setIsOpen(false);
                                }, children: "Yes" }), _jsx(Button, { styleType: 'light', onClick: () => setIsOpen(false), children: "No" })] })] })] }));
};
export default ButtonText;
