"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MoonLoader_1 = __importDefault(require("react-spinners/MoonLoader"));
const Loader = ({ color = 'light', size = 15, }) => {
    return ((0, jsx_runtime_1.jsx)(MoonLoader_1.default, { size: size, color: color === 'dark' ? '#4A1FB8' : '#fff' }));
};
exports.default = Loader;
