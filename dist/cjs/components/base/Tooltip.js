"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Tooltip = ({ title, children, }) => ((0, jsx_runtime_1.jsxs)("div", { className: 'space-y-3', children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h5", { children: title }) }), (0, jsx_runtime_1.jsx)("div", { className: 'space-y-2', children: children })] }));
exports.default = Tooltip;
