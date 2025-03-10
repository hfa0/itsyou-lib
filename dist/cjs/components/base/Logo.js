"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const image_1 = __importDefault(require("next/image"));
const logo_png_1 = __importDefault(require("../../assets/logos/logo.png"));
const Logo = ({ size, href }) => {
    return ((0, jsx_runtime_1.jsx)(link_1.default, { href: href || '/', className: "shrink-0", children: (0, jsx_runtime_1.jsx)(image_1.default, { width: size || 50, height: size || 50, src: logo_png_1.default, alt: 'its you model agentur agency hostess' }) }));
};
exports.default = Logo;
