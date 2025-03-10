"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tabs;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
function Tabs({ items, listClassName, buttonClassName, listWrapperClassName, selectedClassName, wrapperClassName, }) {
    return ((0, jsx_runtime_1.jsxs)(react_1.Tab.Group, { className: (0, dedupe_1.default)(wrapperClassName, 'flex flex-col items-center space-y-6'), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)(listWrapperClassName, 'w-full flex justify-center'), children: (0, jsx_runtime_1.jsx)(react_1.Tab.List, { className: (0, dedupe_1.default)(listClassName, 'flex rounded-xl bg-gray-100 p-1 w-full max-w-md overflow-x-auto no-scrollbar'), children: items.map((item) => ((0, jsx_runtime_1.jsx)(react_1.Tab, { className: ({ selected }) => (0, dedupe_1.default)(buttonClassName, 'w-full rounded-lg py-2.5 text-sm font-medium leading-5', selected
                            ? ['bg-white text-gray-900 shadow', selectedClassName]
                            : 'hover:bg-white/[0.12]'), children: item.name }, item.name))) }) }), (0, jsx_runtime_1.jsx)(react_1.Tab.Panels, { className: "w-full", children: items.map((item, idx) => ((0, jsx_runtime_1.jsx)(react_1.Tab.Panel, { children: item.panel }, idx))) })] }));
}
