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
const TextArea_ = ({ wrapperClassName, error, label, className, ...rest }, ref) => {
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, { className: wrapperClassName, error: error, label: label, children: (0, jsx_runtime_1.jsx)(react_2.Textarea, { ref: ref, ...rest, className: (0, dedupe_1.default)(className, 'border-2 min-h-12 w-full rounded-sm p-1.5 shadow-sm text-primary') }) }));
};
const TextArea = (0, react_1.forwardRef)(TextArea_);
exports.default = TextArea;
