"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = __importDefault(require("./Button"));
const Modal_1 = __importDefault(require("./Modal"));
const ButtonSubmit = ({ children, onClick, className, styleType, type, ...rest }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleClick = () => {
        setIsOpen(true);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { ...rest, type: 'button', className: className, styleType: styleType, onClick: handleClick, children: children }), (0, jsx_runtime_1.jsxs)(Modal_1.default, { name: 'Confirmation', open: isOpen, onClose: () => setIsOpen(false), classes: { content: 'space-y-10' }, children: [(0, jsx_runtime_1.jsxs)("p", { className: 'text-xl text-center', children: ["Are you sure you want to ", (0, jsx_runtime_1.jsx)("br", {}), ' ', (0, jsx_runtime_1.jsx)("strong", { className: 'text-secondary', children: children }), "?"] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-6 justify-center', children: [(0, jsx_runtime_1.jsx)(Button_1.default, { className: 'sm:min-w-36', styleType: 'dark', type: type || 'button', onClick: (e) => {
                                    onClick?.(e);
                                    setIsOpen(false);
                                }, children: "Yes" }), (0, jsx_runtime_1.jsx)(Button_1.default, { className: 'sm:min-w-36', type: 'button', styleType: 'light', onClick: () => setIsOpen(false), children: "No" })] })] })] }));
};
exports.default = ButtonSubmit;
