"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const Icon_1 = __importDefault(require("./Icon"));
function LearnMoreButton({ href }) {
    return ((0, jsx_runtime_1.jsx)(link_1.default, { href: href, className: 'text-primary font-medium hover:text-gray-400', children: (0, jsx_runtime_1.jsxs)("span", { className: 'inline-flex gap-x-1.5 items-center pt-4', children: ["Mehr erfahren ", (0, jsx_runtime_1.jsx)(Icon_1.default, { size: 18, name: 'ArrowRight' })] }) }));
}
exports.default = LearnMoreButton;
