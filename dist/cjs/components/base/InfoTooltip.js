"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const Icon_1 = __importDefault(require("./Icon"));
function InfoTooltip({ children, size }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex", children: (0, jsx_runtime_1.jsxs)(react_1.Popover, { children: [(0, jsx_runtime_1.jsx)(react_1.PopoverButton, { className: "block focus:outline-none text-gray-400 data-[active]:text-gray-300", children: (0, jsx_runtime_1.jsx)(Icon_1.default, { size: size, name: 'Info', className: '' }) }), (0, jsx_runtime_1.jsx)(react_1.PopoverPanel, { transition: true, anchor: "top", className: "transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-white min-w-52 min-h-60 p-4 border shadow-lg rounded-lg font-medium text-gray-600", children: children }) })] }) }));
}
exports.default = InfoTooltip;
