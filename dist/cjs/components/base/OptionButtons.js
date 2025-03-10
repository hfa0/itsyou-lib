"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const OptionButtons = ({ items, className }) => {
    const [selected, setSelected] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)(className, 'flex h-12 border-2 rounded-lg divide-x-2 shadow-sm'), children: items.map((item, i) => ((0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)(selected === i ? 'bg-gray-100' : 'bg-white', 'w-28 whitespace-nowrap flex items-center justify-center first:rounded-l-lg last:rounded-r-lg font-semibold cursor-pointer'), onClick: () => setSelected(i), children: item.label }, item.id))) }));
};
exports.default = OptionButtons;
