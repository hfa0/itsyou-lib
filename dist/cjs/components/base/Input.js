"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const Icon_1 = __importDefault(require("./Icon"));
const InputWrapper_1 = __importDefault(require("./InputWrapper"));
function Input_({ icon, className, label, wrapperClassName, error, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, { error: error, label: label, className: wrapperClassName, children: (0, jsx_runtime_1.jsxs)("div", { className: (0, dedupe_1.default)('flex items-center'), children: [icon && ((0, jsx_runtime_1.jsx)(Icon_1.default, { name: icon, className: 'ml-4 -mr-10 z-10 text-gray-400' })), (0, jsx_runtime_1.jsx)("input", { ...rest, ref: ref, className: (0, dedupe_1.default)('border-2 rounded-sm w-full min-h-10 border-gray-200 shadow-sm', className, icon ? 'px-12' : 'px-4') })] }) }));
}
const Input = (0, react_1.forwardRef)(Input_);
exports.default = Input;
