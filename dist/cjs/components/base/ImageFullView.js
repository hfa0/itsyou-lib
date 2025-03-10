"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const Icon_1 = __importDefault(require("./Icon"));
const Loader_1 = __importDefault(require("./Loader"));
const ImageFullView = ({ imageUrl, onClose, }) => {
    const [loading, setLoading] = (0, react_1.useState)(true);
    const handleImageLoad = () => {
        setLoading(false);
    };
    if (!imageUrl) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50", onClick: onClose, children: (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(Icon_1.default, { name: "Close", className: "absolute top-4 right-4 bg-white text-black rounded-full p-1 text-lg cursor-pointer", onClick: (e) => {
                        e.stopPropagation();
                        onClose?.();
                    } }), loading && ((0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50", children: (0, jsx_runtime_1.jsx)(Loader_1.default, {}) })), (0, jsx_runtime_1.jsx)(image_1.default, { src: imageUrl, alt: "Full View", width: 800, height: 600, className: "rounded-lg max-w-full max-h-screen object-contain", onLoad: handleImageLoad })] }) }));
};
exports.default = ImageFullView;
