"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const Icon_1 = __importDefault(require("./Icon"));
const ButtonIcon = ({ icon, onClick, href }) => {
    const I = ((0, jsx_runtime_1.jsx)(Icon_1.default, { size: 28, name: icon, className: 'cursor-pointer text-gray-700 border p-1.5 rounded shadow-sm hover:bg-gray-50/70', onClick: onClick }));
    if (href)
        return (0, jsx_runtime_1.jsx)(link_1.default, { href: href, children: I });
    return I;
};
exports.default = ButtonIcon;
