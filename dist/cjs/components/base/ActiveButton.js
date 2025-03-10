"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const Button_1 = __importDefault(require("./Button"));
const ActiveButton = ({ children, active, wrapperClassName, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(Button_1.default, { ...props, styleType: 'light', wrapperClassName: wrapperClassName, className: (0, dedupe_1.default)('font-semibold hover:bg-white hover:border-gray-700', active ? '!text-gray-700 border-gray-700' : 'text-gray-400', className), children: children }));
};
exports.default = ActiveButton;
