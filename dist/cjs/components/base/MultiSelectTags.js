"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const InputWrapper_1 = __importDefault(require("./InputWrapper"));
const MultiSelectTags = ({ tags, label }) => {
    const [state, setState] = (0, react_1.useState)({});
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, { label: label, children: (0, jsx_runtime_1.jsx)("div", { className: 'space-x-2 flex', children: tags.map((tag) => ((0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)('border-2 border-gray-200 px-4 py-3 min-w-16 rounded-full text-gray-400 cursor-pointer font-semibold', state[tag.id] ? 'text-gray-700 border-gray-700' : ''), onClick: () => setState((s) => ({
                    ...s,
                    [tag.id]: !s[tag.id],
                })), children: tag.name }, tag.id))) }) }));
};
exports.default = MultiSelectTags;
