"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const Button_1 = __importDefault(require("./Button"));
const Modal_1 = __importDefault(require("./Modal"));
const ButtonText = ({ href, children, onClick, disabled, className, }) => {
    const C = href ? link_1.default : 'div';
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleClick = (e) => {
        if (href) {
            onClick?.(e);
            return;
        }
        setIsOpen(true);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(C, { onClick: handleClick, href: href, className: (0, dedupe_1.default)(className, 'w-full text-center text-secondary font-medium cursor-pointer hover:text-secondary/80', { 'opacity-70 pointer-events-none': disabled }), children: children }), (0, jsx_runtime_1.jsxs)(Modal_1.default, { name: 'Confirmation', open: isOpen, onClose: () => setIsOpen(false), classes: { content: 'space-y-10' }, children: [(0, jsx_runtime_1.jsxs)("p", { className: 'text-xl text-center', children: ["Are you sure you want to ", (0, jsx_runtime_1.jsx)("br", {}), ' ', (0, jsx_runtime_1.jsx)("strong", { className: 'text-secondary', children: children }), "?"] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-6 justify-center', children: [(0, jsx_runtime_1.jsx)(Button_1.default, { styleType: 'dark', onClick: (e) => {
                                    onClick?.(e);
                                    setIsOpen(false);
                                }, children: "Yes" }), (0, jsx_runtime_1.jsx)(Button_1.default, { styleType: 'light', onClick: () => setIsOpen(false), children: "No" })] })] })] }));
};
exports.default = ButtonText;
