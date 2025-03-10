"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Tabs_1 = __importDefault(require("./Tabs"));
const DashboardTabs = ({ items, }) => {
    return ((0, jsx_runtime_1.jsx)(Tabs_1.default, { selectedClassName: '', listClassName: 'bg-gray space-x-0 !p-0 !border-2 !rounded-md !w-auto !max-w-lg !w-full divide-x divide-gray-300', buttonClassName: 'shadow-none !py-2 !rounded-none px-3 focus-visible:!ring-0 focus-visible:!outline-0 focus-visible:!ring-offset-0 whitespace-nowrap', listWrapperClassName: '!justify-start', items: items }));
};
exports.default = DashboardTabs;
