"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const Icon_1 = __importDefault(require("./Icon"));
const FileIconLink = ({ type, url, title, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'flex', children: (0, jsx_runtime_1.jsx)(link_1.default, { href: url || '/#', target: url ? '_blank' : undefined, className: (0, dedupe_1.default)('cursor-pointer', {
                'pointer-events-none opacity-50': !url,
            }), children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col items-center justify-center space-y-1', children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: type }), (0, jsx_runtime_1.jsx)("div", { className: 'font-thin uppercase text-xs', children: title })] }) }) }));
};
exports.default = FileIconLink;
