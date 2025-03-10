"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@headlessui/react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
const Overlay_1 = __importDefault(require("./Overlay"));
const Icon_1 = __importDefault(require("./Icon"));
function Modal(props) {
    const { open = false, onClose, classes, children, overlayProps, name, } = props;
    const [isOpen, setIsOpen] = (0, react_1.useState)(open);
    (0, react_1.useEffect)(() => {
        setIsOpen(open);
    }, [open]);
    const close = () => {
        setIsOpen(false);
        onClose();
    };
    return ((0, jsx_runtime_1.jsx)(react_2.Transition.Root, { show: isOpen, as: react_1.Fragment, children: (0, jsx_runtime_1.jsxs)(react_2.Dialog, { as: "div", className: (0, dedupe_1.default)(classes?.root, 'relative z-40'), onClose: onClose, children: [(0, jsx_runtime_1.jsx)(Overlay_1.default, { ...overlayProps }), (0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)(classes?.container, 'fixed inset-0 z-10 overflow-y-auto'), children: (0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)(classes?.innerContainer, 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'), children: (0, jsx_runtime_1.jsx)(react_2.Transition.Child, { as: react_1.Fragment, enter: (0, dedupe_1.default)(classes?.transitionEnter, 'ease-out duration-300'), enterFrom: (0, dedupe_1.default)(classes?.transitionEnterFrom, 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'), enterTo: (0, dedupe_1.default)(classes?.transitionEnterTo, 'opacity-100 translate-y-0 sm:scale-100'), leave: (0, dedupe_1.default)(classes?.transitionLeave, 'ease-in duration-200'), leaveFrom: (0, dedupe_1.default)(classes?.transitionLeaveFrom, 'opacity-100 translate-y-0 sm:scale-100'), leaveTo: (0, dedupe_1.default)(classes?.transitionLeaveTo, 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'), children: (0, jsx_runtime_1.jsxs)(react_2.Dialog.Panel, { className: (0, dedupe_1.default)(classes?.panel, 'relative transform rounded-lg bg-white dark:bg-dark text-left shadow-xl ring-1 ring-onLight/50 dark:ring-onDark/50 transition-all sm:w-full sm:max-w-lg'), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-between border-b px-6 py-3', children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-2xl", children: name }), (0, jsx_runtime_1.jsx)(Icon_1.default, { onClick: close, size: 30, className: 'p-1 hover:bg-gray-50 cursor-pointer rounded', name: 'Close' })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)(classes?.content, 'px-4 pt-5 pb-4 sm:p-6'), children: children })] }) }) }) })] }) }));
}
exports.default = Modal;
