"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@headlessui/react");
const dedupe_1 = __importDefault(require("classnames/dedupe"));
function Overlay(props, ref) {
    const { classes } = props;
    return ((0, jsx_runtime_1.jsx)(react_2.Transition.Child, { ref: ref, as: react_1.Fragment, enter: (0, dedupe_1.default)("ease-out duration-300", classes?.transitionEnter), enterFrom: (0, dedupe_1.default)("opacity-0", classes?.transitionEnterFrom), enterTo: (0, dedupe_1.default)("opacity-100", classes?.transitionEnterTo), leave: (0, dedupe_1.default)("ease-in duration-200", classes?.transitionLeave), leaveFrom: (0, dedupe_1.default)("opacity-100", classes?.transitionLeaveFrom), leaveTo: (0, dedupe_1.default)("opacity-0", classes?.transitionLeaveTo), children: (0, jsx_runtime_1.jsx)("div", { className: (0, dedupe_1.default)(classes?.background, "fixed inset-0 bg-gray-400 bg-opacity-80 backdrop-blur transition-opacity") }) }));
}
exports.default = (0, react_1.forwardRef)(Overlay);
