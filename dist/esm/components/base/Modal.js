import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames/dedupe';
import Overlay from './Overlay';
import Icon from './Icon';
function Modal(props) {
    const { open = false, onClose, classes, children, overlayProps, name, } = props;
    const [isOpen, setIsOpen] = useState(open);
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    const close = () => {
        setIsOpen(false);
        onClose();
    };
    return (_jsx(Transition.Root, { show: isOpen, as: Fragment, children: _jsxs(Dialog, { as: "div", className: classNames(classes?.root, 'relative z-40'), onClose: onClose, children: [_jsx(Overlay, { ...overlayProps }), _jsx("div", { className: classNames(classes?.container, 'fixed inset-0 z-10 overflow-y-auto'), children: _jsx("div", { className: classNames(classes?.innerContainer, 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'), children: _jsx(Transition.Child, { as: Fragment, enter: classNames(classes?.transitionEnter, 'ease-out duration-300'), enterFrom: classNames(classes?.transitionEnterFrom, 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'), enterTo: classNames(classes?.transitionEnterTo, 'opacity-100 translate-y-0 sm:scale-100'), leave: classNames(classes?.transitionLeave, 'ease-in duration-200'), leaveFrom: classNames(classes?.transitionLeaveFrom, 'opacity-100 translate-y-0 sm:scale-100'), leaveTo: classNames(classes?.transitionLeaveTo, 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'), children: _jsxs(Dialog.Panel, { className: classNames(classes?.panel, 'relative transform rounded-lg bg-white dark:bg-dark text-left shadow-xl ring-1 ring-onLight/50 dark:ring-onDark/50 transition-all sm:w-full sm:max-w-lg'), children: [_jsxs("div", { className: 'flex justify-between border-b px-6 py-3', children: [_jsx("h4", { className: "text-2xl", children: name }), _jsx(Icon, { onClick: close, size: 30, className: 'p-1 hover:bg-gray-50 cursor-pointer rounded', name: 'Close' })] }), _jsx("div", { className: classNames(classes?.content, 'px-4 pt-5 pb-4 sm:p-6'), children: children })] }) }) }) })] }) }));
}
export default Modal;
