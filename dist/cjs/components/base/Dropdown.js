'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@headlessui/react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const InputWrapper_1 = __importDefault(require("./InputWrapper"));
const Icon_1 = __importDefault(require("./Icon"));
function Dropdown({ items, className, label, right, wrapperClassName, onChangeDropdown, defaultValue, unset, disableCloseOnClick, title, error, hideError, }) {
    const [selected, setSelected] = (0, react_1.useState)(defaultValue);
    (0, react_1.useEffect)(() => {
        setSelected(defaultValue);
    }, [defaultValue]);
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, { error: error, hideError: hideError, label: label, className: wrapperClassName, children: (0, jsx_runtime_1.jsx)(react_2.Popover, { className: (0, dedupe_1.default)('relative h-full w-full'), children: ({ open, close }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_2.Popover.Button, { className: (0, dedupe_1.default)(className, 'w-full group inline-flex items-center justify-between rounded-sm px-4 py-2 font-semibold focus:outline-none border-2 border-gray-200 bg-white shadow-sm', open ? '' : 'text-gray-600'), children: [(0, jsx_runtime_1.jsx)("span", { className: 'whitespace-nowrap', children: title || items[selected]?.label }), (0, jsx_runtime_1.jsx)(Icon_1.default, { name: 'ChevronDown', className: `${open ? 'rotate-180' : 'text-gray-600/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out`, "aria-hidden": "true" })] }), (0, jsx_runtime_1.jsx)(react_2.Transition, { as: react_1.Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-1", children: (0, jsx_runtime_1.jsx)(react_2.Popover.Panel, { className: (0, dedupe_1.default)('absolute z-40 mt-3 w-full sm:max-w-xs transform px-4 sm:px-0 ', right ? 'right-0' : 'left-0'), children: (0, jsx_runtime_1.jsx)("div", { className: "min-w-52", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative bg-white p-3 rounded-sm shadow-lg ring-1 ring-black/5 space-y-1", children: [items.map((item, i) => typeof item.label !== 'string' ? ((0, jsx_runtime_1.jsx)("div", { children: item.label }, item.id)) : ((0, jsx_runtime_1.jsx)("div", { className: 'px-4 py-3 hover:bg-gray-50 cursor-pointer rounded-sm', onClick: () => {
                                                setSelected(i);
                                                onChangeDropdown?.(item);
                                                if (!disableCloseOnClick)
                                                    close();
                                            }, children: item.labels?.length ? ((0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)('grid', `grid-cols-${item.labels.length}`), children: item.labels.map((l) => ((0, jsx_runtime_1.jsx)("div", { className: 'font-medium', children: l }, l))) })) : ((0, jsx_runtime_1.jsx)("div", { className: "block text-gray-700 font-medium", children: item.label })) }, item.id))), unset && ((0, jsx_runtime_1.jsx)("div", { className: 'flex justify-end', onClick: () => {
                                                setSelected(undefined);
                                                onChangeDropdown?.(undefined);
                                                if (!disableCloseOnClick)
                                                    close();
                                            }, children: (0, jsx_runtime_1.jsx)("span", { className: 'underline hover:text-dark cursor-pointer py-1', children: "unset" }) }))] }) }) }) })] })) }) }));
}
exports.default = Dropdown;
