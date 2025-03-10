import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
const ButtonSubmit = ({ children, onClick, className, styleType, type, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { ...rest, type: 'button', className: className, styleType: styleType, onClick: handleClick, children: children }), _jsxs(Modal, { name: 'Confirmation', open: isOpen, onClose: () => setIsOpen(false), classes: { content: 'space-y-10' }, children: [_jsxs("p", { className: 'text-xl text-center', children: ["Are you sure you want to ", _jsx("br", {}), ' ', _jsx("strong", { className: 'text-secondary', children: children }), "?"] }), _jsxs("div", { className: 'flex space-x-6 justify-center', children: [_jsx(Button, { className: 'sm:min-w-36', styleType: 'dark', type: type || 'button', onClick: (e) => {
                                    onClick?.(e);
                                    setIsOpen(false);
                                }, children: "Yes" }), _jsx(Button, { className: 'sm:min-w-36', type: 'button', styleType: 'light', onClick: () => setIsOpen(false), children: "No" })] })] })] }));
};
export default ButtonSubmit;
