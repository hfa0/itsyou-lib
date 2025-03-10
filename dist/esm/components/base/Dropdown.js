'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames/dedupe';
import InputWrapper from './InputWrapper';
import Icon from './Icon';
function Dropdown({ items, className, label, right, wrapperClassName, onChangeDropdown, defaultValue, unset, disableCloseOnClick, title, error, hideError, }) {
    const [selected, setSelected] = useState(defaultValue);
    useEffect(() => {
        setSelected(defaultValue);
    }, [defaultValue]);
    return (_jsx(InputWrapper, { error: error, hideError: hideError, label: label, className: wrapperClassName, children: _jsx(Popover, { className: classNames('relative h-full w-full'), children: ({ open, close }) => (_jsxs(_Fragment, { children: [_jsxs(Popover.Button, { className: classNames(className, 'w-full group inline-flex items-center justify-between rounded-sm px-4 py-2 font-semibold focus:outline-none border-2 border-gray-200 bg-white shadow-sm', open ? '' : 'text-gray-600'), children: [_jsx("span", { className: 'whitespace-nowrap', children: title || items[selected]?.label }), _jsx(Icon, { name: 'ChevronDown', className: `${open ? 'rotate-180' : 'text-gray-600/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out`, "aria-hidden": "true" })] }), _jsx(Transition, { as: Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-1", children: _jsx(Popover.Panel, { className: classNames('absolute z-40 mt-3 w-full sm:max-w-xs transform px-4 sm:px-0 ', right ? 'right-0' : 'left-0'), children: _jsx("div", { className: "min-w-52", children: _jsxs("div", { className: "relative bg-white p-3 rounded-sm shadow-lg ring-1 ring-black/5 space-y-1", children: [items.map((item, i) => typeof item.label !== 'string' ? (_jsx("div", { children: item.label }, item.id)) : (_jsx("div", { className: 'px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-sm', onClick: () => {
                                                setSelected(i);
                                                onChangeDropdown?.(item);
                                                if (!disableCloseOnClick)
                                                    close();
                                            }, children: item.labels?.length ? (_jsx("div", { className: classNames('grid', `grid-cols-${item.labels.length}`), children: item.labels.map((l) => (_jsx("div", { className: 'font-medium', children: l }, l))) })) : (_jsx("div", { className: "block text-gray-700 font-medium", children: item.label })) }, item.id))), unset && (_jsx("div", { className: 'flex justify-end', onClick: () => {
                                                setSelected(undefined);
                                                onChangeDropdown?.(undefined);
                                                if (!disableCloseOnClick)
                                                    close();
                                            }, children: _jsx("span", { className: 'underline hover:text-dark cursor-pointer py-1', children: "unset" }) }))] }) }) }) })] })) }) }));
}
export default Dropdown;
