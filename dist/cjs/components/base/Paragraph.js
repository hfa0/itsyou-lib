"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
function Paragraph({ children, className }) {
    return (0, jsx_runtime_1.jsx)("p", { className: (0, dedupe_1.default)('text-base px-3 sm:px-3.5', className), children: children });
}
exports.default = Paragraph;
