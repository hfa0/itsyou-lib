"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const link_1 = __importDefault(require("next/link"));
const Icon_1 = __importDefault(require("./Icon"));
const Loader_1 = __importDefault(require("./Loader"));
const Button = ({ styleType = 'dark', children, className, wrapperClassName, icon, href, isLoading, iconClassName, ...rest }) => {
    const Comp = href ? link_1.default : 'button';
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const props = href ? { href, ...rest } : rest;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)('flex', wrapperClassName), children: (0, jsx_runtime_1.jsx)(Comp, { ...props, disabled: props.disabled, className: (0, dedupe_1.default)(className, 'w-full min-w-20 py-2 border-2 shadow-sm rounded-md font-medium', { 'pointer-events-none': props.disabled || isLoading }, { 'opacity-50': props.disabled }, {
                'bg-primary text-white border-dark hover:bg-dark/80': styleType === 'dark',
                'bg-white text-gray hover:bg-gray-50/70 hover:text-gray-800': styleType === 'light',
            }), children: (0, jsx_runtime_1.jsx)("div", { className: 'flex space-x-3 justify-center items-center h-full px-2 text-center w-full min-h-5', children: isLoading ? ((0, jsx_runtime_1.jsx)(Loader_1.default, { color: styleType === 'dark' ? 'light' : 'dark' })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [icon && (0, jsx_runtime_1.jsx)(Icon_1.default, { className: iconClassName, size: 15, name: icon }), (0, jsx_runtime_1.jsx)("div", { className: 'whitespace-nowrap', children: children })] })) }) }) }));
};
exports.default = Button;
