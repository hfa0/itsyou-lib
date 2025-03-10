"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Tag(props) {
    return ((0, jsx_runtime_1.jsx)("span", { className: 'bg-light py-1 px-4 rounded-full bg-opacity-60 border border-light text-primary font-medium', children: props.tag }));
}
exports.default = Tag;
