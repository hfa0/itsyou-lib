"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const Icon_1 = __importDefault(require("./Icon"));
const InputWrapper = ({ label, children, className, error, hideError, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, dedupe_1.default)('space-y-2', className), children: [label && (0, jsx_runtime_1.jsx)("label", { className: 'text-gray-500 font-light', children: label }), (0, jsx_runtime_1.jsxs)("div", { className: 'space-y-1', children: [children, !hideError && ((0, jsx_runtime_1.jsxs)("div", { className: (0, dedupe_1.default)('font-medium text-red-600 flex space-x-1 items-center invisible h-4', {
                            '!visible': error,
                        }), children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { size: 16, name: 'Info' }), (0, jsx_runtime_1.jsx)("span", { children: error })] }))] })] }));
};
exports.default = InputWrapper;
